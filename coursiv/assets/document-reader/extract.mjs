const maxBytes = 20 * 1024 * 1024;
const maxChars = 500_000;
const wordNs = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
const strictWordNs = 'http://purl.oclc.org/ooxml/wordprocessingml/main';

async function readWord(file) {
 const {unzipSync, strFromU8} = await import('./fflate.mjs');
 const data = unzipSync(new Uint8Array(await file.arrayBuffer()), {
  filter: entry => entry.name === 'word/document.xml' && entry.originalSize <= maxBytes
 });
 if (!data['word/document.xml']) throw new Error('No readable Word document text was found.');
 const doc = new DOMParser().parseFromString(strFromU8(data['word/document.xml']), 'application/xml');
 if (doc.querySelector('parsererror')) throw new Error('The Word document could not be read.');
 const ns = doc.getElementsByTagNameNS(wordNs,'body').length ? wordNs : strictWordNs;
 const paragraphs = [...doc.getElementsByTagNameNS(ns, 'p')];
 return paragraphs.map(p => [...p.getElementsByTagNameNS(ns, '*')].map(n => {
  if (n.localName === 't') return n.textContent;
  if (n.localName === 'tab') return '\t';
  if (n.localName === 'br' || n.localName === 'cr') return '\n';
  return '';
 }).join('')).join('\n');
}

async function readPdf(file) {
 const pdfjs = await import('./pdf.min.mjs');
 pdfjs.GlobalWorkerOptions.workerSrc = new URL('./pdf.worker.min.mjs', import.meta.url).href;
 const loading = pdfjs.getDocument({data: new Uint8Array(await file.arrayBuffer()), isEvalSupported:false, useSystemFonts:true});
 try {
  const pdf = await loading.promise;
  if (pdf.numPages > 300) throw new Error('Choose a PDF with 300 pages or fewer.');
  const pages = [];
  let length = 0;
  for (let i = 1; i <= pdf.numPages; i++) {
   const page = await pdf.getPage(i);
   const {items} = await page.getTextContent();
   const text = items.map(item => 'str' in item ? item.str + (item.hasEOL ? '\n' : '') : '').join('');
   length += text.length;
   if (length > maxChars) throw new Error('The extracted text exceeds 500,000 characters.');
   pages.push(text);
   page.cleanup();
  }
  return pages.join('\n');
 } catch(error) {
  if (error?.name === 'PasswordException') throw new Error('Password-protected PDFs are not supported.');
  if (error?.name === 'InvalidPDFException') throw new Error('The PDF could not be read.');
  throw error;
 } finally {
  await loading.destroy();
 }
}

export async function extractText(file) {
 if (file.size > maxBytes) throw new Error('Choose a file no larger than 20 MB.');
 const ext = file.name.split('.').pop()?.toLowerCase();
 let text;
 if (ext === 'docx') text = await readWord(file);
 else if (ext === 'pdf') text = await readPdf(file);
 else if (ext === 'txt' || file.type === 'text/plain') text = await file.text();
 else throw new Error('Choose a .txt, .docx, or .pdf file.');
 if (text.length > maxChars) throw new Error('The extracted text exceeds 500,000 characters.');
 if (!text.trim()) throw new Error(ext === 'pdf' ? 'No selectable text found. Scanned PDFs need OCR first.' : 'No text was found in this file.');
 return text.trim();
}
