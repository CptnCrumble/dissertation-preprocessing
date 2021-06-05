var fs = require('fs');
const validation = require('./validation');
const extract = require('./summaryStatistics');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);


let filtered = data.filter( x => validation.summaryStatistics(x))
    .map( x => extract.getSummaryStatisticData(x));

console.log(filtered.length);
console.log(filtered[3]);