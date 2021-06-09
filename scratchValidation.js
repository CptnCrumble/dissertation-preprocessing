const fs = require('fs');
const validation = require('./validation');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);


// data.map(x => {
//     if(!validation.validate(validation.pdssValidator,x)) {console.log(x['Number'],x['Timepoint'])}
// });
// data.map( x => {
//     if(validation.summaryStatistics(x)) {console.log(x['Number'],x['Timepoint'])}
// });

// let target = data.filter( (x) => x['Number'] === 64 && x['Timepoint'] === 0  )
// console.log(target)
// //console.log(sixzero[0]['PDQSI'])
// console.log(typeof sixzero[0]['PDQSI'] === 'number')
// console.log(sixzero[0]['PDQSI'] !== undefined)
// console.log(sixzero[0]['PDQSI'] !== 'N/A')
// console.log(validation.summaryStatistics(sixzero[0]))

console.log(data.length);
console.log('Valid HADS results')
var hads = data.filter(x => validation.validate(validation.hadsValidator,x))
console.log(hads.length);

console.log('Valid PDSS results')
var pdss = data.filter(x => validation.validate(validation.pdssValidator,x))
console.log(pdss.length);

console.log('Valid NMS results')
var nms = data.filter(x => validation.validate(validation.nmsValidator,x))
console.log(nms.length);

console.log('Valid NMS - no sex results')
var nmsNo = data.filter(x => validation.validate(validation.nmsNoSexQsValidator,x))
console.log(nmsNo.length);

console.log('Valid UPDRS results')
var updrs = data.filter(x => validation.validate(validation.updrsValidator,x))
console.log(updrs.length);

console.log('Valid PDQ8 results')
var pdq8 = data.filter(x => validation.validate(validation.pdq8Validator,x))
console.log(pdq8.length);

console.log('Valid PDQ39 results')
var pdq39 = data.filter(x => validation.validate(validation.pdq39Validator,x))
console.log(pdq39.length);

console.log('Valid PDQC results')
var pdqc = data.filter(x => validation.validate(validation.pdqcValidator,x))
console.log(pdqc.length);





