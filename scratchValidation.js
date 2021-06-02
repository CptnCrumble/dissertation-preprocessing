const fs = require('fs');
const validation = require('./validation');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);


data.map(x => {
    if(!validation.validate(validation.pdssValidator,x)) {console.log(x['Number'],x['Timepoint'])}
});
