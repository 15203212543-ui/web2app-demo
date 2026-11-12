const info=(title,note,art='trend')=>({title,note,art});
const single=(title,options,icons)=>({title,options,icons});
const multi=(title,options,icons)=>({title,options,icons,multi:true,note:'请选择所有适用项'});
const flows={
finelo:{
 name:'Finelo', logo:'◈ finelo', title:'28 天<span>人工智能交易员</span><br>挑战赛', prompt:'你以前做过交易吗？', start:['是的','不'],
 steps:{
 intro:info('开始使用 Finelo 进行交易','Finelo 帮你系统地学习市场和交易，并练习使用人工智能辅助分析。'),
 skill:single('您对人工智能交易的基础知识了解多少？',['完全不熟悉','听到了一些术语','掌握基本知识','掌握基础知识之外的知识','经验丰富的交易员'],['🌱','💬','📘','📊','🎯']),
 barriers:multi('之前是什么阻碍了你开始交易？',['没有明确的系统','时间不够','感觉太迟了','对我来说太复杂了。'],['🧭','⏱','⌛','🧩']),
 reassurance:{...info('Finelo 帮助你克服恐惧，开始行动','从基础概念开始，用模拟练习把所学变成自己的交易流程。'),skip:true},
 goal:multi('你为什么对交易感兴趣？',['灵活安排','与薪资无关','自己当老板','远程友好型','其他原因'],['🗓','💬','🎯','💻','…']),
 risk:single('你愿意承担更高的风险以获得更大的回报吗？',['绝对地','取决于机会。','我更倾向于风险平衡。','不，我选择稳妥的做法。'],['⚡','🔍','⚖️','🛡']),
 decision:single('你很难快速做出决定吗？',['是的，一直都是这样。','有时','一点也不'],['⏳','🤔','⚡']),
 fit:{...info('交易比你想象的更适合很多人。','每个人的学习节奏不同。你可以从适合自己的练习开始。'),skip:true},
 finance:single('你对自己的财务状况有何感想？',['我感觉很舒服','我希望拥有更稳定的环境。','我难以实现自己的财务目标'],['🙂','⚖️','🎯']),
 celebrate:single('你会如何庆祝你的首次交易盈利？',['还清一些账单','添加到应急基金','再投资','增加退休基金','短假'],['🧾','🛟','📊','🌱','🏖']),
 progress:{...info('你已经取得进展了。','看看你的回答如何影响接下来的学习路线。'),skip:true},
 profile:{title:'个人简介',profile:true},
 plan:{title:'你的专属 AI 交易员挑战',art:'trend',result:true},
 pitch:info('现在就选择你的 AI 交易机器人吧！','所有 6 个机器人均可供您使用。回答 3 个问题，我们将根据您的偏好设置筛选列表——选择权完全在您手中。'),
 frequency:{...single('你希望机器人有多活跃？',['每天 5 笔交易','每天 10 笔交易','每天 15 笔交易','每天 20 笔交易'],['🛡','⚖️','🎯','🚀']),setup:1},
 loss:{...single('当交易亏损时，机器人应该：',['立即离开','提前离开','给交易留些空间','给交易留出足够的空间'],['🛡','⚖️','🎯','🚀']),setup:2},
 profit:{...single('当交易盈利时，机器人应该：',['首轮收盘','小幅获利早收','等待中等规模的收益','等待大幅收益'],['🛡','⚖️','🎯','🚀']),setup:3},
 preset:{title:'以下是您选择的内容',note:'这些是您选择的设置。此机器人基于此类预设运行。',preset:true},
 explain:{title:'人工智能机器人如何工作',note:'机器人按预设的交易频率与退出偏好运行。此原型仅展示问卷中选定的设置。',art:'trend'},
 bots:{title:'选择你的 AI 机器人',note:'从 6 个机器人中任选一个。您可以随时切换预设。',bots:true},
 detail:{title:'机器人详情',detail:true},
 end:{title:'机器人设置预览已完成',note:'可以返回修改设置，或重新体验挑战。'}
 },path:a=>[...(a.start===1?['intro']:[]),'skill',...(a.start===1?['barriers','reassurance']:[]),'goal','risk','decision','fit','finance','celebrate','progress','profile','plan','pitch','frequency','loss','profit','preset','explain','bots','detail','end']
},
coursiv:{
 name:'Coursiv',logo:'Coursiv',title:'28天人工智能<br>证书课程',subtitle:'通过此测验即可个性化您的订阅',prompt:'你会如何描述自己？',start:['我在一家公司工作。','我为自己工作。'],
 steps:{
 social:info('“超过200万”','人们加入Coursiv是为了掌握人工智能。','social-photo'),
 age:{...single('你今年多大？',['18–24','25–34','35–44','45–54','55岁以上']),note:'我们将根据您的答案定制您的人工智能程序'},
 goal:single('你使用人工智能的主要目标是什么？',['在目前的岗位上取得进步','转行从事新职业','培养自由职业技能','远程或独立工作','将人工智能应用于个人项目','其他'],['📈','🔄','💰','🏡','🎨','🚀']),
 industry:single('你从事哪个行业？',['技术 / IT','财务 / 会计','市场营销 / 媒体','医疗保健','教育','销售 / 业务拓展','运营管理','其他'],['💻','🏦','📣','🩺','📚','🤝','📋','🔷']),
 overwhelmed:single('你是否觉得人工智能让你感到不知所措？',['总是','经常','有时','不太会'],['😰','😟','🤔','😌']),
 comfort:single('您目前对人工智能工具的使用体验如何？',['我感觉很舒服','我有时也会遇到困难','我经常遇到困难','我什么都不知道'],['👍','🤷','😓','🆕']),
 milestone:info('太棒了！让我们带你进入下一个阶段。','我们已帮助超过200万成年人掌握人工智能，也能帮助您。我们的课程基于数千小时的研究，内容经过精心打造，完全符合您的需求和技能水平！','milestone-photo'),
 falling:single('你害怕在人工智能潮流中落后吗？',['总是','经常','有时','不太会'],['😨','😧','🫤','😎']),
 confidence:single('您使用人工智能的体验最贴切的描述是什么？',['完全是人工智能新手','尝试过几次简单的任务','经常在工作或个人项目中使用人工智能','我为复杂任务构建人工智能工作流程'],['🌱','🧪','💻','🧠']),
 barrier:single('阻碍您有效利用人工智能的最大因素是什么？',['没有明确的系统或路线图','时间不够','对我来说太复杂了','不知道从何入手'],['🧭','⌛','😵‍💫','🚪']),
 level:single('哪个选项最能形容您目前的职业级别？',['学生或职场新人','个人贡献者','经理 / 团队负责人','高管 / 企业主','已退休'],['🎒','🧑‍💻','👥','🏢','🏡']),
 use:single('你希望人工智能首先帮助你解决什么问题？',['写作与内容创作','数据分析与研究','图片与设计','自动化重复性任务','学习与技能提升'],['✍️','📘','🎨','📧','📚']),
 worry:single('当您思考人工智能与您的职业生涯时，您最担心的是什么？',['落后于使用人工智能的同事','我的工作即将自动化','我不具备胜任工作的技能','没什么，我认为人工智能是一个机会'],['🏃','🔌','🎯','💡']),
 milestone2:{title:'没什么好担心的。',art:'milestone-photo-2',quote:[
 '正如哈佛商学院教授卡里姆·拉卡尼在《哈佛商业评论》中所说，',
 '人工智能不会取代人类，但掌握人工智能的人类将会取代不掌握人工智能的人类。',
 '分歧不在于你与人工智能的对抗，而在于使用人工智能的人与不使用人工智能的人之间的区别。现在就获得人工智能认证，你将永远不必再担心被取代。'
 ]},
 resources:single('你有没有尝试过其他学习人工智能的课程或资源？',['不，这是我第一次','免费资源（YouTube、文章）','在另一个平台上的付费课程','我使用人工智能，但我想要结构化的学习'],['🆕','🆓','🎓','🧩']),
 online:single('你乐于在线学习新技能吗？',['是的','没有把握','不'],['✅','🤷','❌']),
 firstWeek:single('你希望第一周取得怎样的成果？',['写我的第一个人工智能提示','自动化工作任务','创建新内容','用 AI 启动一个副业项目'],['✍️','🤖','📱','💵']),
 time:single('让我们设定你的每日人工智能掌握目标',['每天10分钟','每天15分钟','每天 20 分钟']),
 celebrate:{...single('你会如何庆祝人工智能取得的首个成果？',['还清一些账单','向退休基金缴款','增加应急基金','计划一次假期','其他'],['🧾','💰','🏦','🏖️','🚀']),note:'设定目标并奖励自己可以让你保持动力。'},
 progress:info('你已经取得进步了！','研究表明，明确的目标和适度的奖励能够提升动力和坚持性。我们将帮助您设定清晰的目标，关注每一个小小的进步，并保持学习的动力。Coursiv 会时刻提醒您学习目标，并在您学习的过程中适时地发送温馨提示。','milestone-photo-progress'),
 analysis:{title:'分析答案，打造个性化的人工智能证书课程……',analysis:true},
 email:{title:'输入您的邮箱地址，即可获取您的',email:true},
 name:{title:'我们该如何称呼你？',input:true},
 plan:{title:'您的个性化人工智能证书课程',art:'compare',comparison:true},
 easier:{title:'人工智能比你想象的更容易',note:'我们的认证课程旨在从第一天起就显著提升您的人工智能知识水平。',pitchPage:true},
 proof:{title:'看看Coursiv如何赋能学习者',reviews:true},
 offer:{title:'选择最适合您的方案',offer:true},
 end:{title:'你的课程预览已完成',note:'可以返回调整答案，或重新体验这份问卷。',art:'certificate'}
 },path:()=>['social','age','goal','industry','overwhelmed','comfort','milestone','falling','confidence','barrier','level','use','worry','milestone2','resources','online','firstWeek','time','celebrate','progress','analysis','email','name','plan','easier','proof','offer','end']
}
};
const botProfiles=[
 ['AI Capital Guard',[0,0,0],'#9ad060','capital-guard','Built for traders who prefer protection over excitement. AI Capital Guard focuses on disciplined risk management, smaller position risk, and consistent execution. It may trade less often, but every trade follows a structured approach designed to prioritize capital preservation.',2,4],
 ['AI Market Chameleon',[2,1,2],'#9a7cf0','market-chameleon','Markets change, and AI Market Chameleon is built to adjust with them. This bot uses an adaptive approach that can become more selective or more active depending on market conditions. Designed for traders who want flexibility rather than a single fixed style.',5,10],
 ['AI Balanced Alpha',[1,4,1],'#6bb9d6','balanced-alpha','AI Balanced Alpha aims to balance growth opportunities with risk management. It adapts to changing market conditions while maintaining a structured approach to trade selection. A popular choice for traders looking for a middle ground between caution and activity.',4,8],
 ['AI Momentum Max',[2,2,2],'#dc6963','momentum-max','AI Momentum Max focuses on strong market momentum and fast-moving opportunities. It is the most active strategy in the lineup and is designed for traders who are comfortable with higher volatility and a larger number of trades. This strategy prioritizes growth potential but may experience larger swings in account value.',8,15],
 ['AI Apex Select',[0,0,1],'#8279f4','apex-select','AI Apex Select is designed to be patient. Instead of acting on every market movement, it waits for stronger signals that meet its criteria. Built for traders who prefer quality over quantity and want a more measured approach to AI-assisted trading.',4,12],
 ['AI Power Surge',[3,2,3],'#eeae57','power-surge','AI Power Surge is built for traders seeking a more active experience. It monitors the market frequently and may generate more trade signals than lower-activity strategies. Greater activity and risk can result in larger account fluctuations, both positive and negative.',8,18]
];
const botDescriptions=[
 'AI Capital Guard 适合重视本金保护的交易者。它强调有纪律的风险管理、较小的仓位风险和一致的执行。交易可能较少，但每笔交易都遵循以保护本金为优先的流程。',
 '市场会变化，AI Market Chameleon 会随之调整。它采用自适应策略，根据市场状况筛选交易机会或提高活跃度，适合希望灵活调整策略的交易者。',
 'AI Balanced Alpha 旨在兼顾增长机会与风险管理。它会根据市场变化调整，同时以系统化的方法筛选交易机会，适合希望在谨慎与活跃之间取得平衡的交易者。',
 'AI Momentum Max 策略专注于强劲的市场动能和快速变化的交易机会。它是该系列策略中最活跃的策略，专为能够承受更高波动性和更频繁交易的交易者而设计。该策略优先考虑增长潜力，但账户价值的波动幅度可能更大。',
 'AI Apex Select 强调耐心。它不会对每一次市场波动采取行动，而是等待符合标准的更强信号，适合重视信号质量、偏好审慎交易方式的交易者。',
 'AI Power Surge 适合希望提高交易活跃度的交易者。它会频繁监测市场，可能比活跃度较低的策略产生更多交易信号。活跃度和风险上升时，账户价值的上涨与下跌幅度都可能扩大。'
];
const coursivOptionImages={
 overwhelmed:["coursiv-option-anxious_face_with_sweat.webp","coursiv-option-worried_face.webp","coursiv-option-thinking_face.webp","coursiv-option-relieved_face.webp"],
 comfort:["coursiv-option-thumbs_up.webp","coursiv-option-person_shrugging.webp","coursiv-option-downcast_face_with_sweat.webp","coursiv-option-new_button.webp"],
 falling:["coursiv-option-fearful_face.webp","coursiv-option-anguished_face.webp","coursiv-option-face_with_diagonal_mouth.webp","coursiv-option-smiling_face_with_sunglasses.webp"],
 online:["coursiv-option-check_mark_button.webp","coursiv-option-person_shrugging.webp","coursiv-option-cross_mark.webp"],
 firstWeek:["coursiv-option-writing_hand.webp","coursiv-option-robot.webp","coursiv-option-mobile_phone.webp","coursiv-option-dollar_banknote.webp"],
 goal:["coursiv-option-chart_increasing.webp","coursiv-option-counterclockwise_arrows_button.webp","coursiv-option-money_bag.webp","coursiv-option-house_with_garden.webp","coursiv-option-artist_palette.webp","coursiv-option-rocket-3.webp"],
 industry:["coursiv-option-laptop.webp","coursiv-option-bank.webp","coursiv-option-megaphone.webp","coursiv-option-stethoscope.webp","coursiv-option-books.webp","coursiv-option-handshake.webp","coursiv-option-clipboard.webp","coursiv-option-large_blue_diamond.webp"],
 confidence:["coursiv-option-seedling.webp","coursiv-option-test_tube.webp","coursiv-option-laptop.webp","coursiv-option-brain.webp"],
 barrier:["coursiv-option-compass.webp","coursiv-option-hourglass_done.webp","coursiv-option-face_with_spiral_eyes.webp","coursiv-option-door.webp"],
 level:["coursiv-option-backpack.webp","coursiv-option-technologist.webp","coursiv-option-busts_in_silhouette.webp","coursiv-option-office_building.webp","coursiv-option-house_with_garden.webp"],
 use:["coursiv-option-writing_hand.webp","coursiv-option-blue_book.webp","coursiv-option-artist_palette.webp","coursiv-option-email-1.webp","coursiv-option-books.webp"],
 worry:["coursiv-option-person_running.webp","coursiv-option-electric_plug.webp","coursiv-option-bullseye.webp","coursiv-option-light_bulb.webp"],
 resources:["coursiv-option-new_button.webp","coursiv-option-free_button.webp","coursiv-option-graduation_cap.webp","coursiv-option-puzzle_piece.webp"],
 celebrate:["coursiv-option-receipt.webp","coursiv-option-image_quiz-9.webp","coursiv-option-image_quiz-10.webp","coursiv-option-v3_migrated_d14fbcf1p6wyzn_v3_quiz_wish_3.webp","coursiv-option-rocket-2.webp"]
};
const fineloSetupImages={
 frequency:["finelo-setup-shield-1.webp","finelo-setup-balance_scale.webp","finelo-setup-bullseye.webp","finelo-setup-rocket.webp"],
 loss:["finelo-setup-scissors.webp","finelo-setup-door.webp","finelo-setup-rightwards_hand.webp","finelo-setup-mantelpiece_clock.webp"],
 profit:["finelo-setup-coin.webp","finelo-setup-dollar_banknote.webp","finelo-setup-money_bag-1.webp","finelo-setup-trophy.webp"]
};
const setupKeys=['frequency','loss','profit'];
// Observed on the live funnel; digits are zero-based option positions.
const observedPresets={
 '000':0,'001':4,'002':4,'003':4,
 '010':0,'011':4,'012':4,'013':4,
 '020':1,'021':1,'022':1,'023':5,
 '030':1,'031':1,'032':3,'033':5,
 '100':0,'101':2,'102':4,'103':4,
 '110':0,'111':2,'112':4,'113':4,
 '120':1,'121':1,'122':1,'123':5,
 '130':1,'131':1,'132':3,'133':5,
 '200':0,'201':2,'202':4,'203':4,
 '210':0,'211':2,'212':4,'213':4,
 '220':1,'221':1,'222':1,'223':5,
 '230':1,'231':1,'232':3,'233':5,
 '300':0,'301':2,'302':4,'303':4,
 '310':2,'311':2,'312':4,'313':4,
 '320':1,'321':1,'322':1,'323':5,
 '330':1,'331':1,'332':3,'333':5
};
function recommendedBot(answers){
 const picks=setupKeys.map(key=>answers[key]);
 return picks.every(Number.isInteger)?observedPresets[picks.join('')]:undefined;
}
const presetCopy={
 0:[['少量信号','严格止损','小目标'],['信号较少，较快退出','优先保护账户余额','保持较小仓位']],
 1:[['频繁信号','自适应止损','多样目标'],['根据市场情况切换策略','保持活跃，避免过度交易','策略表现可能每周变化']],
 2:[['稳定信号','平衡止损','中等目标'],['全天持续提供交易机会','及时止损，追求稳步收益','避免两端的极端设置']],
 3:[['频繁信号','宽幅止损','大目标'],['频繁寻找入场机会，并扩大仓位','等待行情走完再退出','准备应对双向大幅波动']],
 4:[['少量信号','严格止损','耐心退出'],['严格筛选入场机会','仓位较小，持有时间较长','有时连续几天没有信号']],
 5:[['持续信号','宽幅止损','大目标'],['提供最高的信号频率','瞄准较大的市场波动','六种预设中回撤可能最大']]
};
const app=document.querySelector('#app');
const id=document.querySelector('meta[name=replica-mobile]')?.content||location.pathname.match(/^\/sites\/(finelo|coursiv)\//)?.[1]||document.querySelector('meta[name=questionnaire-site]')?.content||new URLSearchParams(location.search).get('quiz');
const flow=Object.hasOwn(flows,id)?flows[id]:null;
const empty=()=>({at:'start',answers:{}});
const storageKey='quiz-preview-v4:'+id;
function load(){try{const x=JSON.parse(sessionStorage.getItem(storageKey));if(x?.answers&&(x.at==='start'||Object.hasOwn(flow.steps,x.at)))return x}catch{}return empty()}
let state=flow?load():empty(), menu=false;
const save=()=>{try{sessionStorage.setItem(storageKey,JSON.stringify(state))}catch{}};
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n};
function asset(file,alt,cls){const img=el('img',undefined,cls);img.src='./assets/'+file;img.alt=alt;return img}
function button(text,fn,cls='primary'){const b=el('button',text,cls);b.type='button';b.onclick=fn;return b}
function jump(at){state.at=at;save();render(true);window.scrollTo(0,0)}
function next(){const path=flow.path(state.answers);jump(path[path.indexOf(state.at)+1]||'start')}
function reset(){state=empty();menu=false;jump('start')}
const homeLink=()=>{const a=el('a','问卷目录','quiet');a.href='./';return a};
function art(kind){
 const block=el('div',undefined,'art '+kind);
 block.setAttribute('aria-hidden','true');
 if(kind==='trend'){
 block.innerHTML='<svg viewBox="0 0 420 270"><defs><pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#8e81dd" stroke-opacity=".18"/></pattern><linearGradient id="metal" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#8983a9"/></linearGradient></defs><rect width="420" height="270" fill="url(#grid)"/><text x="22" y="48" fill="#fff" font-size="25" font-weight="700">130.81</text><text x="23" y="70" fill="#7ad49d" font-size="13">↑ 13.6%　 +9.00</text><g>'+[155,118,164,113,142,95,61,89,43,116,147].map((y,i)=>'<path stroke="'+(i%4<2?'#79c398':'#e75765')+'" stroke-width="2" d="M'+(42+i*34)+' '+(y-10)+'v78"/><path stroke="'+(i%4<2?'#79c398':'#e75765')+'" stroke-width="16" d="M'+(42+i*34)+' '+y+'v58"/>').join('')+'</g><g transform="translate(210 155)"><path d="M-43 19Q-66 20 -75 47L-63 99H63L75 47Q66 20 43 19Z" fill="url(#metal)" stroke="#68617f" stroke-width="4"/><path d="M-17 33H17L10 70H-10Z" fill="#6450c8"/><rect x="-13" y="-2" width="26" height="29" rx="6" fill="#494759"/><rect x="-46" y="-86" width="92" height="89" rx="37" fill="url(#metal)" stroke="#c5c0dd" stroke-width="2"/><rect x="-35" y="-64" width="70" height="38" rx="15" fill="#242139"/><ellipse cx="-16" cy="-46" rx="6" ry="8" fill="#c6bcff"/><ellipse cx="16" cy="-46" rx="6" ry="8" fill="#c6bcff"/><path d="M-11 -15Q0 -8 11 -15" stroke="#554878" fill="none" stroke-width="3" stroke-linecap="round"/></g></svg>';
 }else if(kind.startsWith('milestone-photo')){block.classList.add('milestone-illustration');block.append(asset(({'milestone-photo':'coursiv-milestone.webp','milestone-photo-2':'coursiv-milestone-2.webp','milestone-photo-progress':'coursiv-progress.webp'})[kind],''));
 }else if(kind==='social-photo'){block.append(asset('coursiv-social.webp',''));
 }else if(kind==='compare'){
 const columns=[
 ['你没有','Coursiv','困难：','coursiv-before.webp',['不知从何入手','无认可的资格证书','未能充分发挥人工智能的价值','对雇主而言是隐形的']],
 ['您与','Coursiv：','解决方案：','coursiv-after.webp',['清晰的分步指南','可共享的人工智能凭证','人工智能带来的可靠结果','在众多员工中脱颖而出']]
 ];
 for(const [label,heading,kicker,file,items] of columns){
 const column=el('div',undefined,'compare-column'),card=el('div',undefined,'compare-card');
 const top=el('div',undefined,'compare-label');top.append(el('span',label),el('strong',heading));card.append(top);
 for(const [i,item] of items.entries()){const row=el('div',undefined,'compare-row');if(!i)row.append(el('strong',kicker));row.append(el('span',item));card.append(row)}
 column.append(asset(file,''),card);block.append(column);
 }
 }else if(kind==='certificate'){block.append(el('div','✦','seal'),el('strong','AI CERTIFICATE PROGRAM'),el('span','28 DAY LEARNING PLAN'))}
 else {for(const s of ['01 · 理解 AI','02 · 练习提示词','03 · 完成工作任务'])block.append(el('div',s,'lesson'))}
 return block;
}
function portrait(i){
 const p=el('div',undefined,'portrait');
 p.append(asset(i?'coursiv-independent.webp':'coursiv-company.webp',''));
 return p;
}
function botMeters(stats,english=false){
 const meters=el('div',undefined,'bot-meters');
 const labels=english?['Bot Activity','Risk Profile','Volatility Exposure']:['机器人活动','风险概况','波动率风险敞口'];
 const levels=english?['Low','Moderate','High','Very High']:['低','中等','高','很高'];
 const risks=english?['Conservative','Moderate','Aggressive','','Balanced']:['保守','中等','激进','','均衡'];
 for(const [j,label] of labels.entries()){
 const meter=el('div',undefined,'bot-meter'),bar=el('i');bar.style.setProperty('--bot-fill',[19,50,75,100,50][stats[j]]+'%');
 meter.append(el('span',label),el('strong',(j===1?risks:levels)[stats[j]]),bar);meters.append(meter);
 }
 return meters;
}
function render(focus=false){
 app.replaceChildren();
 if(!flow){
 document.body.className='directory';const m=el('main',undefined,'catalog');
 m.append(el('small','本地预览'),el('h1','Finelo 与 Coursiv'),el('p','从官网首页进入，或直接打开问卷。'));
 for(const [key,f] of Object.entries(flows)){
 const card=el('section',undefined,'catalog-card '+key);
 card.append(el('h2',f.name),el('p',key==='finelo'?'28 天人工智能交易员挑战赛':'28 天人工智能证书课程'));
 const links=el('div',undefined,'catalog-links');
 for(const [label,url] of [['官网首页','./'+key+'-home.html'],['直接打开问卷','?quiz='+key]]){const a=el('a',label);a.href=url;links.append(a)}
 card.append(links);m.append(card)
 }
 app.append(m);return;
 }
 document.title=flow.name+' · 问卷复刻预览';document.body.className=id;
 const start=state.at==='start', path=flow.path(state.answers), pos=path.indexOf(state.at), step=start?null:flow.steps[state.at];
 const question=id==='coursiv'&&!!step?.options;
 const resultPart=id==='coursiv'?({plan:2,easier:3,proof:4})[state.at]:0;
 const isMilestone=id==='coursiv'&&step?.art?.startsWith('milestone-photo');
 const noBack=id==='coursiv'&&['social','milestone','milestone2','progress','analysis','email','name'].includes(state.at);
 const qNumber=id==='coursiv'?path.slice(0,pos+1).filter(key=>flow.steps[key].options).length:0;
 app.dataset.step=state.at;
 const header=el('header',undefined,'top'),brand=el('span',flow.logo,'brand');
 header.append(start||noBack?el('span'):button('‹',()=>jump(state.at==='bots'&&!state.answers.viewedExplanation?'preset':path[pos-1]||'start'),'icon back'),brand);
 brand.replaceChildren(asset(id==='coursiv'?'coursiv-logo-purple.svg':id+'-logo.svg',flow.name,'brand-image'));
 if(step?.offer)header.append(button('获取我的计划',()=>document.querySelector('#offer-plans')?.scrollIntoView({block:'start'}),'offer-jump'));
 header.firstChild.setAttribute('aria-label',start?'':'返回上一页');
 if(question)header.firstChild.replaceChildren(asset('coursiv-back.svg','','question-back'));
 const menuButton=button(menu?'×':'☰',()=>{menu=!menu;render();(document.querySelector('.quiz-menu-close')||document.querySelector('.menu-toggle'))?.focus()},'icon menu-toggle');menuButton.setAttribute('aria-label','菜单');menuButton.setAttribute('aria-expanded',String(menu));if(!step?.offer)header.append(question?el('div',qNumber+'/16','counter'):(isMilestone||resultPart||(start&&id==='finelo'))?el('span'):menuButton);app.append(header);
 if(id==='coursiv'&&(start||state.at==='social')&&!menu)menuButton.replaceChildren(asset('coursiv-menu.svg','','social-menu'));
 if(menu){
 if(id==='coursiv'){
 const support='https://support.coursiv.io/en/support/home?utm_source=funnel&utm_medium=link&utm_campaign=registration_Funnel';
 const closeMenu=()=>{menu=false;render();document.querySelector('.menu-toggle')?.focus()};
 const shade=el('div',undefined,'quiz-menu-shade');shade.onclick=closeMenu;
 const nav=el('nav',undefined,'coursiv-quiz-menu');nav.setAttribute('role','dialog');nav.setAttribute('aria-modal','true');nav.setAttribute('aria-label','Coursiv menu');
 const close=button(undefined,closeMenu,'quiz-menu-close');close.setAttribute('aria-label','关闭菜单');close.append(asset('coursiv-menu-close.svg',''));nav.append(close);
 nav.onkeydown=e=>{
 if(e.key==='Escape'){e.preventDefault();closeMenu();return}
 if(e.key!=='Tab')return;
 const controls=nav.querySelectorAll('button,a[href]'),first=controls[0],last=controls[controls.length-1];
 if((e.shiftKey&&document.activeElement===first)||(!e.shiftKey&&document.activeElement===last)){e.preventDefault();(e.shiftKey?last:first).focus()}
 };
 const link=(label,url)=>{const a=el('a',label);a.href=url;return a};
 for(const [label,slug] of [['Terms & Conditions','terms'],['Privacy Policy','privacy'],['Subscription Terms','subscription'],['Refund Policy','refund-policy']])nav.append(link(label,'https://legal.coursiv.io/en/'+slug));
 nav.append(link('Support Center',support));
 const help=el('p');help.append('We will be glad to assist you via email. ',link('Send your questions and feedback here.',support));nav.append(help);
 app.append(shade,nav);
 }else{const nav=el('nav',undefined,'menu');nav.append(homeLink(),button('重新开始',restart,'quiet'));app.append(nav)}
 }
 if(!start){
 const isCoursivQuestion=id==='coursiv'&&step.options;
 const p=el('progress');p.max=id==='coursiv'?16:path.length;p.value=id==='coursiv'?qNumber:pos+1;p.setAttribute('aria-label','答题进度');
 if(id==='finelo'){
 const track=el('div',undefined,'segments');track.setAttribute('role','progressbar');track.setAttribute('aria-label','答题进度');track.setAttribute('aria-valuenow',String(pos+1));track.setAttribute('aria-valuemin','0');track.setAttribute('aria-valuemax',String(path.length));
 for(let i=0;i<6;i++){const segment=el('i');segment.style.setProperty('--fill',Math.min(100,Math.max(0,((pos+1)/path.length*6-i)*100))+'%');track.append(segment)}
 app.append(track);
 }else if(isCoursivQuestion)app.append(p);
 else if(resultPart){const track=el('div',undefined,'result-segments');track.setAttribute('aria-label','计划预览进度');for(let i=0;i<4;i++)track.append(el('i',undefined,i<resultPart?'filled':''));app.append(track)}
 }
 const main=el('main',undefined,start?'stage start':step.bots?'stage bots':step.detail?'stage bot-detail':step.preset?'stage bot-preset':step.setup?'stage setup':step.options?('stage question'+(question?(step.icons?' illustrated':' text-options'):'')):'stage'),title=el('h1',step?.title);title.tabIndex=-1;
 if(start){
 if(id==='finelo'){const badges=el('div',undefined,'badges');
 for(const [file,label,detail] of [
 ['finelo-learners.webp','超过 100 万用户的选择','学习了新技能'],
 ['finelo-rating.webp','TRUSTPILOT 评分','4.5 满意度评分']
 ]){const badge=el('div');const copy=el('span');copy.append(el('small',label),el('strong',detail));badge.append(asset(file,''),copy);badges.append(badge)}
 main.append(badges,asset('finelo-hero.webp','人工智能交易机器人','finelo-hero'))}
 title.innerHTML=flow.title;main.append(title);
 if(flow.subtitle)main.append(el('p',flow.subtitle,'subtitle'));
 main.append(el('p',flow.prompt,'note'));
 const options=el('div',undefined,'start-options');flow.start.forEach((v,i)=>{
 const b=button(undefined,()=>{if(state.answers.start!==i)state.answers={start:i};next()},'start-option');
 if(id==='coursiv')b.append(portrait(i));b.append(el('span',v));options.append(b);
 });main.append(options);
 if(id==='finelo'){
 const legal=el('p',undefined,'entry-legal');
 const policy=(label,path)=>{const a=el('a',label);a.href='https://legal.finelo.com/en/'+path;a.target='_blank';a.rel='noopener noreferrer';return a};
 legal.append('原站提示：继续操作即表示您同意',policy('条款和条件','terms'),'、',policy('隐私政策','privacy'),'以及',policy('订阅条款','subscription'),'。',el('br'),'FINELO LIMITED，利马索尔，塞浦路斯',el('br'),'本地预览：答题不会接受原站条款。');
 main.append(legal);
 }
 }else{
 if(step.setup)main.append(el('div','机器人设置 · '+step.setup+'/3','kicker'));
 if(step.detail)title.textContent=botProfiles[state.answers.bot]?.[0]??step.title;
 main.append(title);
 if(step.note)main.append(el('p',step.note,'note'));
 if(step.art&&!step.comparison)main.append(art(step.art));
 if(step.quote){const copy=el('p',undefined,'note');copy.append(step.quote[0],el('strong',step.quote[1]),step.quote[2]);main.append(copy)}
 if(step.options){
 const group=el('div',undefined,'options');const selected=state.answers[state.at];
 const illustrations=id==='coursiv'?coursivOptionImages[state.at]:fineloSetupImages[state.at];
 step.options.forEach((option,i)=>{
 if(step.multi){
 const l=el('label',undefined,'option');const input=el('input');input.type='checkbox';input.checked=selected?.includes(i)||false;
 input.onchange=()=>{const values=[...(state.answers[state.at]||[])];state.answers[state.at]=input.checked?[...values,i]:values.filter(v=>v!==i);continueButton.disabled=!state.answers[state.at].length;save()};
 l.append(el('span',step.icons?.[i]||'•','emoji'),el('span',option),input);group.append(l);
 }else{const b=button(undefined,()=>{if(step.setup&&selected!==i){delete state.answers.bot;delete state.answers.botManual}state.answers[state.at]=i;next()},'option');b.classList.toggle('selected',selected===i);if(illustrations?.[i])b.classList.add('has-option-image');b.append(illustrations?.[i]?asset(illustrations[i],'','option-image'):el('span',step.icons?.[i]||'•','emoji'),el('span',option),el('span','›','chevron'));group.append(b)}
 });
 main.append(group);
 const continueButton=button(id==='finelo'?'下一步':'继续',next);
 if(step.multi){continueButton.disabled=!selected?.length;main.append(continueButton)}
 }else if(step.analysis){
 const ring=el('div',undefined,'analysis-ring'),number=el('span','0%');ring.append(number);
 ring.setAttribute('role','progressbar');ring.setAttribute('aria-label','分析答案');ring.setAttribute('aria-valuemin','0');ring.setAttribute('aria-valuemax','100');
 const count=el('div',undefined,'analysis-count');count.append(el('strong','200万多人'),el('span','已选择 Coursiv'));
 const review=el('div',undefined,'analysis-review'),stars=el('div',undefined,'analysis-stars');
 for(let i=0;i<5;i++)stars.append(el('span','★'));
 const attribution=el('div',undefined,'analysis-attribution');attribution.append(el('strong','非常强劲清晰'),el('span','蒂娜'));
 review.append(stars,attribution,el('p','“清晰、快乐，而且始终如一，这真的太棒了，我学到了很多东西。”'));
 main.prepend(ring);main.append(count,review,el('p','Trustpilot 上的精选评论。','analysis-caption'));
 const begin=performance.now();
 function tick(now){
 if(!ring.isConnected||state.at!=='analysis')return;
 const pct=Math.min(100,Math.floor((now-begin)/38));
 number.textContent=pct+'%';ring.setAttribute('aria-valuenow',String(pct));ring.style.setProperty('--pct',pct+'%');
 if(pct<100)requestAnimationFrame(tick);
 }
 requestAnimationFrame(tick);
 setTimeout(()=>{if(ring.isConnected&&state.at==='analysis')next()},4500);
 }else if(step.email){
 title.append(el('span','专属AI程序！','email-accent'));
 const form=el('form',undefined,'email-form'),field=el('label',undefined,'email-field'),input=el('input');
 input.type='email';input.required=true;input.autocomplete='off';input.placeholder='您的电子邮件';input.setAttribute('aria-label','您的电子邮件');
 const icon=el('span','✉');icon.setAttribute('aria-hidden','true');field.append(icon,input);
 const privacy=el('p','我们尊重您的隐私。本地预览仅校验格式，不保存或发送邮箱。','email-privacy');
 const submit=el('button','继续','primary');
 form.onsubmit=e=>{e.preventDefault();if(!form.reportValidity())return;input.value='';next()};
 form.append(field,privacy,submit);main.append(form);
 }else if(step.input){
 const form=el('form'),input=el('input',undefined,'name-input');input.type='text';input.maxLength=40;input.placeholder='例如：小林';input.setAttribute('aria-label','演示昵称');
 // The optional demo nickname is kept only in memory.
 input.value=demoName;
 input.oninput=()=>{demoName=input.value};form.onsubmit=e=>{e.preventDefault();next()};
 const submit=el('button','继续','primary');form.append(input,submit);main.append(form);
 }else if(step.comparison){
 const panel=el('section',undefined,'comparison-panel');
 const date=new Date();date.setDate(date.getDate()+28);
 panel.append(title,el('p','我们希望您能获得人工智能证书。','comparison-caption'),el('strong','截至 '+new Intl.DateTimeFormat('zh-CN',{dateStyle:'long'}).format(date),'comparison-date'),art(step.art));
 main.append(panel,button('继续',next));
 }else if(step.pitchPage){
 const features=[
 ['掌握人工智能工具，','培养实用的人工智能技能和信心'],
 ['一站式访问全球顶尖人工智能工具：','ChatGPT、Gemini、Grok 等。'],
 ['获得人工智能证书','，在那些仍在人工智能领域苦苦挣扎的人们中脱颖而出。'],
 ['解锁 1000 多个经实践验证的 AI 提示','，提升工作效率、业务能力和创造力'],
 ['跟踪学习进度，查看你的进步，','并在每节课中建立信心'],
 ['还有更多精彩内容！','']
 ];
 const list=el('ul',undefined,'pitch-features');
 for(const [lead,tail] of features){const li=el('li');li.append(el('strong',lead),el('span',tail));list.append(li)}
 main.append(asset('coursiv-pitch.webp','','pitch-image'),el('h2','试试 Coursiv，你会发现：'),list,button('继续',next));
 }else if(step.reviews){
 title.replaceChildren('看看Coursiv如何',el('br'),'赋能学习者');
 const panel=el('section',undefined,'reviews-panel'),heading=el('h2');heading.append('听听其他人',el('br'),'对Coursiv的评价');panel.append(heading);
 for(let i=1;i<=4;i++)panel.append(asset('coursiv-review-'+i+'.webp','Coursiv 用户评价 '+i,'review-image'));
 const dock=el('div',undefined,'reviews-dock');dock.append(button('继续',next));
 main.append(asset('coursiv-stats.webp','超过 200 万人学习新技能，超过 67 万人获得人工智能证书，Trustpilot 好评率 93%','reviews-stats'),panel,dock);
 }else if(step.offer){
 const goals=el('div',undefined,'offer-goals');
 for(const key of ['goal','celebrate']){
 const v=flow.steps[key].options[state.answers[key]];if(v){const card=el('div');card.append(el('span','你的目标'),el('strong',v));goals.append(card)}
 }
 const plans=el('fieldset',undefined,'offer-plans');plans.id='offer-plans';title.remove();const legend=el('legend',step.title);plans.append(legend);
 for(const [i,[name,price,terms]] of [
 ['一周试用','13.86','第一周只需 13.86 美元，之后每 4 周自动续订，费用为 39.99 美元。'],
 ['4 周计划','39.99','现在只需 39.99 美元，然后每 4 周以 39.99 美元自动续订。'],
 ['12 周计划','79.99','现在只需 79.99 美元，然后每 12 周以 79.99 美元自动续订。']
 ].entries()){
 const label=el('label',undefined,'offer-plan');const input=el('input');input.type='radio';input.name='plan';input.checked=i===(state.answers.offerPlan??1);
 input.onchange=()=>{state.answers.offerPlan=i;save()};
 const copy=el('div');copy.append(el('strong',name),el('small',terms));
 if(i===1)label.append(el('span','最受欢迎','offer-popular'));
 label.append(input,copy,el('strong',price+' 美元','offer-price'));plans.append(label);
 }
 const notice=el('label',undefined,'offer-confirm'),confirm=el('input');confirm.type='checkbox';
 notice.append(confirm,el('span','我了解这是本地方案预览，不会订阅或扣款。'));
 const go=button('获取我的计划',next);go.disabled=true;confirm.onchange=()=>{go.disabled=!confirm.checked};
 main.append(goals,asset('coursiv-challenge.webp','人工智能挑战','offer-art'),el('h2','每天有超过 4000 人开始他们的个性化人工智能证书课程'),el('small','*基于 Coursiv 各项目 2026 年 4 月至 6 月的平均每日报名人数','offer-source'),plans,notice,go);
 }else if(step.profile){
 const summary=el('div',undefined,'summary');
 const {skill,celebrate,risk,decision}=state.answers;
 for(const [label,value] of [
 ['交易基础',flow.steps.skill.options[skill]],
 ['动机',flow.steps.celebrate.options[celebrate]],
 ['决策习惯',['谨慎','视情况而定','果断'][decision]],
 ['风险偏好',['接受较高风险','视机会而定','风险平衡','偏稳健'][risk]]
 ])if(value){const row=el('p');row.append(el('strong',label+'：'),el('span',value));summary.append(row)}
 main.append(summary,button('继续',next));
 }else if(step.result){
 const summary=el('div',undefined,'summary');if(demoName&&id==='coursiv')summary.append(el('strong',demoName+'，这是你的学习方向'));
 const goal=state.answers.goal,labels=flow.steps.goal.options;
 if(Array.isArray(goal)&&goal.length)summary.append(el('p','学习目标：'+goal.map(v=>labels[v]).join('、')));
 if(Number.isInteger(goal))summary.append(el('p','学习目标：'+labels[goal]));
 const minutes=flow.steps.time?.options[state.answers.time];if(minutes)summary.append(el('p','每日安排：'+minutes));
 if(id==='coursiv'&&Number.isInteger(state.answers.firstWeek))summary.append(el('p','第一周目标：'+flow.steps.firstWeek.options[state.answers.firstWeek]));
 main.append(summary,button('继续',next));
 }else if(step.preset){
 const suggested=recommendedBot(state.answers);
 title.prepend(asset('finelo-assistant.webp','','detail-avatar'));
 if(suggested!==undefined){
 const [name,stats,color,slug]=botProfiles[suggested];
 const [labels,notes]=presetCopy[suggested];
 const tags=el('div',undefined,'preset-tags');
 labels.forEach((label,i)=>{const tag=el('div');tag.append(asset('finelo-icon_'+['clock_counter_clockwise','shield_check','currency_circle_dollar'][i]+'.webp',''),el('strong',label));tags.append(tag)});
 const summary=el('div',undefined,'preset-card'), copy=el('div');
 summary.style.setProperty('--bot-color',color);
 copy.append(el('strong',name),botMeters(stats));
 summary.append(asset('finelo-'+slug+'.webp',''),copy);
 const list=el('ul');notes.forEach(note=>list.append(el('li',note)));
 main.append(tags,summary,el('h2','此预设的作用'),list);
 }else{
 const summary=el('div',undefined,'summary');
 setupKeys.forEach(key=>{const value=flow.steps[key].options[state.answers[key]];if(value)summary.append(el('p',value))});
 main.append(summary);
 }
 main.append(button('点击此处了解人工智能机器人的工作原理',()=>{state.answers.viewedExplanation=true;next()},'quiet'),button('继续　→',()=>{state.answers.viewedExplanation=false;jump('bots')}));
 }else if(step.bots){
 const suggested=recommendedBot(state.answers);
 const selected=state.answers.botManual?state.answers.bot:suggested;
 const list=el('fieldset',undefined,'bot-list');const legend=el('legend','可选机器人','sr-only');list.append(legend);
 const actions=el('div',undefined,'bot-actions');
 const proceed=button(!state.answers.botManual&&suggested!==undefined?'跳过':'继续　→',()=>{if(!state.answers.botManual)state.answers.bot=suggested;next()});
 proceed.disabled=selected===undefined;
 title.prepend(asset('finelo-assistant.webp','','detail-avatar'));
 const order=[1,0,2,3,4,5].filter(i=>i!==suggested);if(suggested!==undefined)order.unshift(suggested);
 order.forEach(i=>{
 const [name,stats,color,slug]=botProfiles[i];
 const card=el('label',undefined,'bot-card');card.style.setProperty('--bot-color',color);
 const radio=el('input');radio.type='radio';radio.name='robot';radio.checked=selected===i;
 radio.onchange=()=>{state.answers.bot=i;state.answers.botManual=true;proceed.textContent='继续　→';proceed.disabled=false;save()};
 const heading=el('div',undefined,'bot-heading');heading.append(radio,el('strong',name));card.append(heading);
 if(suggested===i)card.append(el('span','符合您的筛选条件','bot-match'));
 const meters=botMeters(stats);
 card.append(meters,asset('finelo-'+slug+'.webp','','bot-icon'));list.append(card);
 });
 actions.append(proceed);main.append(list,actions);
 }else if(step.detail){
 const [,stats,color,slug,description,stop,target]=botProfiles[state.answers.bot]??botProfiles[0];
 main.style.setProperty('--bot-color',color);
 title.prepend(asset('finelo-assistant.webp','','detail-avatar'),asset('finelo-'+slug+'.webp','','detail-icon'));
 const add=(heading,content)=>{main.append(el('h2',heading),typeof content==='string'?el('p',content):content)};
 add('描述',botDescriptions[state.answers.bot]??description);
 add('交易风格',botMeters(stats));
 add('它如何追踪','该机器人会追踪当前和近期价格走势，使用20周期和50周期移动平均线分析短期和长期趋势，并使用平均真实波幅（ATR）衡量波动性。当这些指标符合其预设标准时，它会发出交易信号，止损位设在入场价下方'+stop+'%，止盈位设在入场价上方'+target+'%。');
 main.append(button('启动机器人　→',next));
 }else if(state.at==='end'){main.append(button('重新体验',restart),homeLink())}
 else {main.append(button('继续',next));if(step.skip)main.append(button('跳过',next,'quiet'))}
 }
 app.append(main);
 if(start&&id==='coursiv'){
 const footer=el('footer',undefined,'coursiv-entry-legal');
 const notice=el('p'),company=el('p','香港海港科技有限公司');
 const policy=(label,path)=>{const a=el('a',label);a.href='https://legal.coursiv.io/en/'+path;a.target='_blank';a.rel='noopener noreferrer';return a};
 notice.append('原站提示：继续操作即表示您同意',policy('条款和条件','terms'),'、',policy('隐私政策','privacy'),'以及',policy('订阅条款。','subscription'));
 footer.append(notice,company,el('p','本地预览：答题不会接受原站条款。'));
 app.append(footer);
 if(id==='coursiv'&&menu){
  for(const child of app.children){
   if(!child.matches('.coursiv-quiz-menu,.quiz-menu-shade'))child.inert=true;
  }
 }
 }
 const modal=app.querySelector('.coursiv-quiz-menu');
 if(modal){
 for(const child of app.children)if(child!==modal&&!child.classList.contains('quiz-menu-shade'))child.inert=true;
 modal.querySelector('.quiz-menu-close').focus({preventScroll:true});
 }else if(focus)title.focus({preventScroll:true});
}
let demoName='';
function restart(){demoName='';reset()}
if(window.mountReplicaQuestionnaire)void window.mountReplicaQuestionnaire(app,id,render);else render();
