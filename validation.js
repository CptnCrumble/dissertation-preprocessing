var fs = require('fs');

const rawData = fs.readFileSync('./dissertation-adapter/data.json');
const data = JSON.parse(rawData);

// ---- Validation Objects - 1 per questionnaire ---------------------------------------------------------------------
const hadsValidation = {
    'allowedValues':[0,1,2,3],
    'keys': [
        'HADS TENSE',
        'HADS ENJOY',
        'HADS FRIGHT',
        'HADS LAUGH',
        'HADS WORRY',
        'HADS CHEER',
        'HADS EASE',
        'HADS SLOW',
        'HADS BUTTERFLY',
        'HADS INTEREST',
        'HADS RESTLESS',
        'HADS FORWARD',
        'HADS PANIC',
        'HADS BOOK'
    ]
}

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// const Validation = {
//     'allowedValues':[],
//     'keys': []
// }

// -------------- Validation Function --------------------------------------------------------

function validate(validationObject,dataObject) {
    let output = [];
    validationObject.keys.forEach(key => {
        if(key in dataObject) {            
            output.push(
                validationObject.allowedValues.includes(dataObject[key])
            );            
        } else {
            output.push(false);
            console.log('%s key not found',key);
        }
    });
    return output.reduce((a,b) => {return a && b});
}

data.map(x => {
    if(!validate(hadsValidation,x)) {console.log(x['Number'],x['Timepoint'])}
});