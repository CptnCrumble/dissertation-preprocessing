var fs = require('fs');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);



let filtered = data.map( n => filterSummaryStatisticData(n)).filter(x => Object.keys(x).length !== 0);
console.log(filtered.length);