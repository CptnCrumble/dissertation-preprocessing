const fs = require('fs');
const validation = require('./validation');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);


// data.map(x => {
//     if(!validation.validate(validation.pdssValidator,x)) {console.log(x['Number'],x['Timepoint'])}
// });
data.map( x => {
    if(validation.summaryStatistics(x)) {console.log(x['Number'],x['Timepoint'])}
});

// let sixzero = data.filter( (x) => x['Number'] === 6 && x['Timepoint'] === 0  )

// //console.log(sixzero[0]['PDQSI'])
// console.log(typeof sixzero[0]['PDQSI'] === 'number')
// console.log(sixzero[0]['PDQSI'] !== undefined)
// console.log(sixzero[0]['PDQSI'] !== 'N/A')
// console.log(validation.summaryStatistics(sixzero[0]))