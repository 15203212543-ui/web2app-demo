// Field kinds: r = cell/range, t = quoted text, n = number.
window.coursivFormulaLibrary = [
 ['Sum and count',[
 ['Sum values that match one condition','SUMIF({0},{1},{2})','r:Check range:A2:A100|t:Condition:Paid|r:Sum range:C2:C100','sumif|sum.*(?:where|if|condition)'],
 ['Sum values that match two conditions','SUMIFS({0},{1},{2},{3},{4})','r:Sum range:C2:C100|r:First check range:A2:A100|t:First condition:North|r:Second check range:B2:B100|t:Second condition:Paid','sumifs|sum.*two conditions'],
 ['Count rows that match a condition','COUNTIF({0},{1})','r:Column to check:B2:B100|t:Condition:Yes','countif|count.*(?:where|condition)|how many'],
 ['Count rows that match two conditions','COUNTIFS({0},{1},{2},{3})','r:First range:A2:A100|t:First condition:North|r:Second range:B2:B100|t:Second condition:Paid','countifs|count.*two conditions'],
 ['Count non-empty cells','COUNTA({0})','r:Range:A2:A100','counta|non.empty'],
 ['Count unique values','ROWS(UNIQUE(FILTER({0},{0}<>"")))','r:Range:A2:A100','count unique','COUNTUNIQUE(FILTER({0},{0}<>""))'],
 ['Average values that match a condition','AVERAGEIF({0},{1},{2})','r:Check range:A2:A100|t:Condition:Paid|r:Average range:B2:B100','averageif|average.*condition'],
 ['Multiply two columns and add the results','SUMPRODUCT({0},{1})','r:First range:A2:A100|r:Second range:B2:B100','sumproduct|multiply.*columns'],
 ['Running total down a column','SUM({0}:{1})','r:First cell:$A$2|r:Current cell:A2','running total'],
 ['Sum the N largest values','SUM(LARGE({0},SEQUENCE({1})))','r:Range:A2:A100|n:Number of values:5','sum.*largest']
 ]],
 ['Lookup',[
 ['Look up a value and return a match from another column','XLOOKUP({0},{1},{2},"")','r:Lookup value:E2|r:Lookup range:A2:A100|r:Return range:B2:B100','xlookup|look up a value'],
 ['VLOOKUP: find a value in the first column of a table','VLOOKUP({0},{1},{2},FALSE)','r:Lookup value:E2|r:Table range:A2:C100|n:Return column:2','vlookup'],
 ['INDEX and MATCH: lookup that works in any Excel version','INDEX({0},MATCH({1},{2},0))','r:Return range:B2:B100|r:Lookup value:E2|r:Lookup range:A2:A100','index.*match'],
 ['Look up with two criteria','XLOOKUP(1,({0}={1})*({2}={3}),{4},"")','r:First range:A2:A100|r:First value:E2|r:Second range:B2:B100|r:Second value:F2|r:Return range:C2:C100','lookup.*two criteria'],
 ['Get the last value in a column','LOOKUP(2,1/({0}<>""),{0})','r:Range:A2:A100','last value'],
 ['Look up across a row (horizontal lookup)','HLOOKUP({0},{1},{2},FALSE)','r:Lookup value:E2|r:Table range:A1:Z3|n:Return row:2','hlookup|horizontal lookup']
 ]],
 ['Logic',[
 ['IF: one result when true, another when false','IF({0}>{1},{2},{3})','r:Cell:A2|n:Threshold:0|t:True result:Yes|t:False result:No','^if'],
 ['Several conditions with different results (grades, tiers, bands)','IFS({0}>={1},{2},{0}>={3},{4},TRUE,{5})','r:Cell:A2|n:Top threshold:90|t:Top result:A|n:Middle threshold:75|t:Middle result:B|t:Other result:C','^ifs|grades'],
 ['IF with AND: both conditions must be true','IF(AND({0}>{1},{2}>{3}),{4},{5})','r:First cell:A2|n:First threshold:0|r:Second cell:B2|n:Second threshold:0|t:True result:Yes|t:False result:No','if.*and|both conditions'],
 ['IF with OR: either condition is enough','IF(OR({0}>{1},{2}>{3}),{4},{5})','r:First cell:A2|n:First threshold:0|r:Second cell:B2|n:Second threshold:0|t:True result:Yes|t:False result:No','if.*or|either condition'],
 ['Replace errors with a friendly value','IFERROR({0},{1})','r:Cell:A2|t:Fallback:N/A','iferror|replace errors'],
 ['Do something only when a cell is blank (or not blank)','IF({0}="",{1},{2})','r:Cell:A2|t:Blank result:Missing|t:Other result:Ready','if.*blank'],
 ['Check whether a cell contains a word','ISNUMBER(SEARCH({0},{1}))','t:Word:Paid|r:Cell:A2','contains a word'],
 ['Map codes to labels (SWITCH)','SWITCH({0},{1},{2},{3},{4},{5})','r:Cell:A2|t:First code:A|t:First label:Active|t:Second code:P|t:Second label:Pending|t:Fallback:Unknown','switch|map codes']
 ]],
 ['Text',[
 ['Extract the first name (text before the first space)','LEFT(TRIM({0}),FIND(" ",TRIM({0})&" ")-1)','r:Full name cell:A2','first name'],
 ['Extract the last name (text after the last space)','IFERROR(TEXTAFTER(TRIM({0})," ",-1),TRIM({0}))','r:Full name cell:A2','last name','REGEXEXTRACT(TRIM({0}),"\\S+$")'],
 ['Get the domain from an email address','MID({0},FIND("@",{0})+1,LEN({0}))','r:Email cell:A2','email domain|domain.*email'],
 ['Join text from several cells with a separator','TEXTJOIN({0},TRUE,{1})','t:Separator:, |r:Range:A2:C2','textjoin|join text'],
 ['Split text into columns by a delimiter','TEXTSPLIT({0},{1})','r:Cell:A2|t:Delimiter:,','textsplit|split text','SPLIT({0},{1},FALSE)'],
 ['Remove extra spaces and line breaks','TRIM(SUBSTITUTE(CLEAN(SUBSTITUTE({0},CHAR(10)," ")),CHAR(160)," "))','r:Cell:A2','trim|extra spaces'],
 ['Capitalise names properly','PROPER({0})','r:Name cell:A2','capitalis|capitaliz|proper'],
 ['Take the first N characters','LEFT({0},{1})','r:Cell:A2|n:Number of characters:5','first.*characters'],
 ['Extract the numbers from text','IFERROR(REGEXREPLACE({0},"[^0-9]",""),"")','r:Cell:A2','numbers from text'],
 ['Count the words in a cell','IF(TRIM({0})="",0,LEN(TRIM({0}))-LEN(SUBSTITUTE(TRIM({0})," ",""))+1)','r:Cell:A2','count.*words'],
 ['Replace one word with another','SUBSTITUTE({0},{1},{2})','r:Cell:A2|t:Find:old|t:Replace with:new','substitute|replace.*word'],
 ['Make a clickable link with custom text','HYPERLINK({0},{1})','r:URL cell:A2|t:Link text:Open','hyperlink|clickable link']
 ]],
 ['Dates',[
 ['Days between two dates','DAYS({1},{0})','r:Start date:A2|r:End date:B2','days between|difference.*dates'],
 ['Working days between two dates','NETWORKDAYS({0},{1})','r:Start date:A2|r:End date:B2','networkdays|working days between'],
 ['Add working days to a date (due date)','WORKDAY({0},{1})','r:Start date:A2|n:Working days:10','workday|add working days'],
 ['Age from a date of birth','DATEDIF({0},TODAY(),"Y")','r:Birth date:A2','date of birth|age from'],
 ['Last day of the month','EOMONTH({0},0)','r:Date cell:A2','eomonth|last day'],
 ['Show the month name or year of a date','TEXT({0},{1})','r:Date cell:A2|t:Date format:mmmm','month name|year of a date'],
 ['Quarter from a date','"Q"&ROUNDUP(MONTH({0})/3,0)','r:Date cell:A2','quarter'],
 ['Day of the week from a date','TEXT({0},"dddd")','r:Date cell:A2','day of the week'],
 ['Flag overdue dates','IF(AND({0}<TODAY(),{0}<>""),"Overdue","")','r:Due date:A2','overdue']
 ]],
 ['Math and stats',[
 ['Percentage change between two numbers','IFERROR(({1}-{0})/{0},0)','r:Old value:A2|r:New value:B2','percentage change|percent change'],
 ['Percent of total','IFERROR({0}/SUM({1}),0)','r:Value:A2|r:Total range:$A$2:$A$100','percent of total'],
 ['Round to N decimals','ROUND({0},{1})','r:Value:A2|n:Decimal places:2','round'],
 ['Largest value that matches a condition','MAXIFS({0},{1},{2})','r:Value range:B2:B100|r:Check range:A2:A100|t:Condition:Paid','maxifs|largest.*condition'],
 ['Rank each value in a list','RANK({0},{1},0)','r:Value:A2|r:Range:$A$2:$A$100','rank'],
 ['Weighted average','IFERROR(SUMPRODUCT({0},{1})/SUM({1}),0)','r:Values:A2:A100|r:Weights:B2:B100','weighted average'],
 ['Median (middle value)','MEDIAN({0})','r:Range:A2:A100','median'],
 ['Random whole number between two values','RANDBETWEEN({0},{1})','n:Minimum:1|n:Maximum:100','random']
 ]],
 ['Data cleanup',[
 ['Flag duplicate values','IF(COUNTIF({0},{1})>1,"Duplicate","")','r:Check range:$A$2:$A$100|r:Cell to check:A2','duplicat'],
 ['List unique values','UNIQUE({0})','r:Range:A2:A100','unique values'],
 ['Check whether a cell holds a number','ISNUMBER({0})','r:Cell:A2','isnumber|holds a number'],
 ['Convert text to a number','VALUE({0})','r:Cell:A2','text to a number'],
 ['Show 0 instead of a blank','IF({0}="",0,{0})','r:Cell:A2','zero.*blank|0.*blank']
 ]],
 ['Finance',[
 ['Monthly loan or mortgage payment','-PMT({0}/1200,{1}*12,{2})','n:Annual rate (%):5|n:Years:30|n:Principal:200000','pmt|loan|mortgage'],
 ['Future value of regular savings','FV({0}/1200,{1}*12,-{2},-{3})','n:Annual rate (%):5|n:Years:10|n:Monthly deposit:200|n:Initial balance:1000','future value|^fv'],
 ['Compound annual growth rate (CAGR)','({1}/{0})^(1/{2})-1','r:Starting value:A2|r:Ending value:B2|n:Years:5','cagr|compound annual growth'],
 ['Profit margin from revenue and cost','IFERROR(({0}-{1})/{0},0)','r:Revenue:A2|r:Cost:B2','profit margin']
 ]],
 ['Dynamic arrays',[
 ['Filter rows that match a condition','FILTER({0},{1}={2},"")','r:Table range:A2:C100|r:Check range:B2:B100|t:Condition:Paid','filter rows','IFNA(FILTER({0},{1}={2}),"")'],
 ['Sort a table by one column','SORT({0},{1},1)','r:Table range:A2:C100|n:Sort column:2','sort a table|sortby','SORT({0},{1},TRUE)'],
 ['Top N rows by value','TAKE(SORT({0},{1},-1),{2})','r:Table range:A2:C100|n:Sort column:2|n:Number of rows:5','top.*rows','SORTN({0},{2},0,{1},FALSE)'],
 ['Generate a list of numbers or dates','SEQUENCE({0},1,{1},{2})','n:Number of rows:10|n:Start:1|n:Step:1','sequence|list of numbers'],
 ['Apply one formula to a whole column (Google Sheets)','IF({0}="","",{0}*{1})','r:Range:A2:A100|n:Multiplier:2','arrayformula|whole column','ARRAYFORMULA(IF({0}="","",{0}*{1}))']
 ]]
];
