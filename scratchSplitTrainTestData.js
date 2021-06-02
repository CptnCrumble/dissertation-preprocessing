const fs = require('fs');
const splitter = require('./splitTrainTest');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);

// Seperate test & train for N=2, T=0
let x = splitter(2,0,data);

console.log(x.testData);
console.log(x.trainingData.length);
console.log(data.length)
