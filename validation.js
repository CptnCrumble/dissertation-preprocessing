// ---- Validator Objects - 1 per questionnaire ---------------------------------------------------------------------
const baseKeys = {
    'HADS-TENSE':[0,1,2,3],
    'HADS-ENJOY':[0,1,2,3],
    'HADS-FRIGHT':[0,1,2,3],
    'HADS-LAUGH':[0,1,2,3],
    'HADS-WORRY':[0,1,2,3],
    'HADS-CHEER':[0,1,2,3],
    'HADS-EASE':[0,1,2,3],
    'HADS-SLOW':[0,1,2,3],
    'HADS-BUTTERFLY':[0,1,2,3],
    'HADS-INTEREST':[0,1,2,3],
    'HADS-RESTLESS':[0,1,2,3],
    'HADS-FORWARD':[0,1,2,3],
    'HADS-PANIC':[0,1,2,3],
    'HADS-BOOK':[0,1,2,3],
    'NMS-1':[0,1],
    'NMS-2':[0,1],
    'NMS-3':[0,1],
    'NMS-4':[0,1],
    'NMS-5':[0,1],
    'NMS-6':[0,1],
    'NMS-7':[0,1],
    'NMS-8':[0,1],
    'NMS-9':[0,1],
    'NMS-10':[0,1],
    'NMS-11':[0,1],
    'NMS-12':[0,1],
    'NMS-13':[0,1],
    'NMS-14':[0,1],
    'NMS-15':[0,1],
    'NMS-16':[0,1],
    'NMS-17':[0,1],
    'NMS-18':[0,1],
    'NMS-19':[0,1],
    'NMS-20':[0,1],
    'NMS-21':[0,1],
    'NMS-22':[0,1],
    'NMS-23':[0,1],
    'NMS-24':[0,1],
    'NMS-25':[0,1],
    'NMS-26':[0,1],
    'NMS-27':[0,1],
    'NMS-28':[0,1],
    'NMS-29':[0,1],
    'NMS-30':[0,1],
    'NMS-31':[0,1],
    'UPDRS-2.1':[0,1,2,3,4],
    'UPDRS-2.2':[0,1,2,3,4],
    'UPDRS-2.3':[0,1,2,3,4],
    'UPDRS-2.4':[0,1,2,3,4],
    'UPDRS-2.5':[0,1,2,3,4],
    'UPDRS-2.6':[0,1,2,3,4],
    'UPDRS-2.7':[0,1,2,3,4],
    'UPDRS-2.8':[0,1,2,3,4],
    'UPDRS-2.9':[0,1,2,3,4],
    'UPDRS-2.10':[0,1,2,3,4],
    'UPDRS-2.11':[0,1,2,3,4],
    'UPDRS-2.12':[0,1,2,3,4],
    'UPDRS-2.13':[0,1,2,3,4],
    'PDSS-1':[0,1,2,3,4],
    'PDSS-2':[0,1,2,3,4],
    'PDSS-3':[0,1,2,3,4],
    'PDSS-4':[0,1,2,3,4],
    'PDSS-5':[0,1,2,3,4],
    'PDSS-6':[0,1,2,3,4],
    'PDSS-7':[0,1,2,3,4],
    'PDSS-8':[0,1,2,3,4],
    'PDSS-9':[0,1,2,3,4],
    'PDSS-10':[0,1,2,3,4],
    'PDSS-11':[0,1,2,3,4],
    'PDSS-12':[0,1,2,3,4],
    'PDSS-13':[0,1,2,3,4],
    'PDSS-14':[0,1,2,3,4],
    'PDSS-15':[0,1,2,3,4],
    'PDQ8-1':[0,1,2,3,4],
    'PDQ8-2':[0,1,2,3,4],
    'PDQ8-3':[0,1,2,3,4],
    'PDQ8-4':[0,1,2,3,4],
    'PDQ8-5':[0,1,2,3,4],
    'PDQ8-6':[0,1,2,3,4],
    'PDQ8-7':[0,1,2,3,4],
    'PDQ8-8':[0,1,2,3,4],
    'PDQ39-1':[0,1,2,3,4],
    'PDQ39-2':[0,1,2,3,4],
    'PDQ39-3':[0,1,2,3,4],
    'PDQ39-4':[0,1,2,3,4],
    'PDQ39-5':[0,1,2,3,4],
    'PDQ39-6':[0,1,2,3,4],
    'PDQ39-7':[0,1,2,3,4],
    'PDQ39-8':[0,1,2,3,4],
    'PDQ39-9':[0,1,2,3,4],
    'PDQ39-10':[0,1,2,3,4],
    'PDQ39-11':[0,1,2,3,4],
    'PDQ39-12':[0,1,2,3,4],
    'PDQ39-13':[0,1,2,3,4],
    'PDQ39-14':[0,1,2,3,4],
    'PDQ39-15':[0,1,2,3,4],
    'PDQ39-16':[0,1,2,3,4],
    'PDQ39-17':[0,1,2,3,4],
    'PDQ39-18':[0,1,2,3,4],
    'PDQ39-19':[0,1,2,3,4],
    'PDQ39-20':[0,1,2,3,4],
    'PDQ39-21':[0,1,2,3,4],
    'PDQ39-22':[0,1,2,3,4],
    'PDQ39-23':[0,1,2,3,4],
    'PDQ39-24':[0,1,2,3,4],
    'PDQ39-25':[0,1,2,3,4],
    'PDQ39-26':[0,1,2,3,4],
    'PDQ39-27':[0,1,2,3,4],
    'PDQ39-28':[0,1,2,3,4],
    'PDQ39-29':[0,1,2,3,4],
    'PDQ39-30':[0,1,2,3,4],
    'PDQ39-31':[0,1,2,3,4],
    'PDQ39-32':[0,1,2,3,4],
    'PDQ39-33':[0,1,2,3,4],
    'PDQ39-34':[0,1,2,3,4],
    'PDQ39-35':[0,1,2,3,4],
    'PDQ39-36':[0,1,2,3,4],
    'PDQ39-37':[0,1,2,3,4],
    'PDQ39-38':[0,1,2,3,4],
    'PDQ39-39':[0,1,2,3,4],
    'PDQC-1':[0,1,2,3,4],
    'PDQC-2':[0,1,2,3,4],
    'PDQC-3':[0,1,2,3,4],
    'PDQC-4':[0,1,2,3,4],
    'PDQC-5':[0,1,2,3,4],
    'PDQC-6':[0,1,2,3,4],
    'PDQC-7':[0,1,2,3,4],
    'PDQC-8':[0,1,2,3,4],
    'PDQC-9':[0,1,2,3,4],
    'PDQC-10':[0,1,2,3,4],
    'PDQC-11':[0,1,2,3,4],
    'PDQC-12':[0,1,2,3,4],
    'PDQC-13':[0,1,2,3,4],
    'PDQC-14':[0,1,2,3,4],
    'PDQC-15':[0,1,2,3,4],
    'PDQC-16':[0,1,2,3,4],
    'PDQC-17':[0,1,2,3,4],
    'PDQC-18':[0,1,2,3,4],
    'PDQC-19':[0,1,2,3,4],
    'PDQC-20':[0,1,2,3,4],
    'PDQC-21':[0,1,2,3,4],
    'PDQC-22':[0,1,2,3,4],
    'PDQC-23':[0,1,2,3,4],
    'PDQC-24':[0,1,2,3,4],
    'PDQC-25':[0,1,2,3,4],
    'PDQC-26':[0,1,2,3,4],
    'PDQC-27':[0,1,2,3,4],
    'PDQC-28':[0,1,2,3,4],
    'PDQC-29':[0,1,2,3,4]
}

const summaryKeys = [
    'NMS-TOTAL',
    'PDSS-TOTAL',
    'PDQ8-TOTAL',
    'PDQ8-PDQSI',
    'Anxiety',
    'Depression',
    'BKS',
    'DKS',
    'FDS',
    'PTI',
    'PTT',
    'PDQ39-PDQSI',
    'PDQ39-Mob',
    'PDQ39-ADL',
    'PDQ39-Emot',
    'PDQ39-Stigma',
    'PDQ39-Soc-Sup',
    'PDQ39-Cog',
    'PDQ39-Comm',
    'PDQ39-Discom',
    'UPDRS-TOTAL',
    'PDQC-PDQSI',
    'PDQC-social/personal-activities',
    'PDQC-anx/dep',
    'PDQC-Self-care',
    'PDQC-Stress'
];

const hadsValidator = {
'allowedValues':[0,1,2,3],
'keys': [
    'HADS-TENSE',
    'HADS-ENJOY',
    'HADS-FRIGHT',
    'HADS-LAUGH',
    'HADS-WORRY',
    'HADS-CHEER',
    'HADS-EASE',
    'HADS-SLOW',
    'HADS-BUTTERFLY',
    'HADS-INTEREST',
    'HADS-RESTLESS',
    'HADS-FORWARD',
    'HADS-PANIC',
    'HADS-BOOK'
]
}

const nmsValidator = {
'allowedValues':[0,1],
'keys': [
    'NMS-1',
    'NMS-2',
    'NMS-3',
    'NMS-4',
    'NMS-5',
    'NMS-6',
    'NMS-7',
    'NMS-8',
    'NMS-9',
    'NMS-10',
    'NMS-11',
    'NMS-12',
    'NMS-13',
    'NMS-14',
    'NMS-15',
    'NMS-16',
    'NMS-17',
    'NMS-18',
    'NMS-19',
    'NMS-20',
    'NMS-21',
    'NMS-22',
    'NMS-23',
    'NMS-24',
    'NMS-25',
    'NMS-26',
    'NMS-27',
    'NMS-28',
    'NMS-29',
    'NMS-30',
    'NMS-31',
    ]
}

const nmsNoSexQsValidator = {
    'allowedValues':[0,1],
    'keys': [
        'NMS-1',
        'NMS-2',
        'NMS-3',
        'NMS-4',
        'NMS-5',
        'NMS-6',
        'NMS-7',
        'NMS-8',
        'NMS-9',
        'NMS-10',
        'NMS-11',
        'NMS-12',
        'NMS-13',
        'NMS-14',
        'NMS-15',
        'NMS-16',
        'NMS-17',
        'NMS-20',
        'NMS-21',
        'NMS-22',
        'NMS-23',
        'NMS-24',
        'NMS-25',
        'NMS-26',
        'NMS-27',
        'NMS-28',
        'NMS-29',
        'NMS-30'
    ]
}

const pdqcValidator = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        'PDQC-1',
        'PDQC-2',
        'PDQC-3',
        'PDQC-4',
        'PDQC-5',
        'PDQC-6',
        'PDQC-7',
        'PDQC-8',
        'PDQC-9',
        'PDQC-10',
        'PDQC-11',
        'PDQC-12',
        'PDQC-13',
        'PDQC-14',
        'PDQC-15',
        'PDQC-16',
        'PDQC-17',
        'PDQC-18',
        'PDQC-19',
        'PDQC-20',
        'PDQC-21',
        'PDQC-22',
        'PDQC-23',
        'PDQC-24',
        'PDQC-25',
        'PDQC-26',
        'PDQC-27',
        'PDQC-28',
        'PDQC-29'
    ]
}

const updrsValidator = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        'UPDRS-2.1',
        'UPDRS-2.2',
        'UPDRS-2.3',
        'UPDRS-2.4',
        'UPDRS-2.5',
        'UPDRS-2.6',
        'UPDRS-2.7',
        'UPDRS-2.8',
        'UPDRS-2.9',
        'UPDRS-2.10',
        'UPDRS-2.11',
        'UPDRS-2.12',
        'UPDRS-2.13'
    ]
}

const pdssValidator = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        'PDSS-1',
        'PDSS-2',
        'PDSS-3',
        'PDSS-4',
        'PDSS-5',
        'PDSS-6',
        'PDSS-7',
        'PDSS-8',
        'PDSS-9',
        'PDSS-10',
        'PDSS-11',
        'PDSS-12',
        'PDSS-13',
        'PDSS-14',
        'PDSS-15'
    ]
}

const pdq8Validator = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        'PDQ8-1',
        'PDQ8-2',
        'PDQ8-3',
        'PDQ8-4',
        'PDQ8-5',
        'PDQ8-6',
        'PDQ8-7',
        'PDQ8-8'
    ]
}

const pdq39Validator = {
    'allowedValues':[0,1,2,3,4],
    'keys': [
        'PDQ39-1',
        'PDQ39-2',
        'PDQ39-3',
        'PDQ39-4',
        'PDQ39-5',
        'PDQ39-6',
        'PDQ39-7',
        'PDQ39-8',
        'PDQ39-9',
        'PDQ39-10',
        'PDQ39-11',
        'PDQ39-12',
        'PDQ39-13',
        'PDQ39-14',
        'PDQ39-15',
        'PDQ39-16',
        'PDQ39-17',
        'PDQ39-18',
        'PDQ39-19',
        'PDQ39-20',
        'PDQ39-21',
        'PDQ39-22',
        'PDQ39-23',
        'PDQ39-24',
        'PDQ39-25',
        'PDQ39-26',
        'PDQ39-27',
        'PDQ39-28',
        'PDQ39-29',
        'PDQ39-30',
        'PDQ39-31',
        'PDQ39-32',
        'PDQ39-33',
        'PDQ39-34',
        'PDQ39-35',
        'PDQ39-36',
        'PDQ39-37',
        'PDQ39-38',
        'PDQ39-39',
    ]
}

// -------------- Validation Function - returns bool--------------------------------------------------------

function validateX(validator,dataObject) {
    let output = [];
    validator.keys.forEach(key => {
        if(key in dataObject) {            
            output.push(
                validator.allowedValues.includes(dataObject[key])
            );            
        } else {
            output.push(false);
            // console.log('%s key not found',key);
        }
    });
    return output.reduce((a,b) => {return a && b});
}

// --------------- Validate summary statistics ----------------------------------------------------------------

function summaryValidate(dataObject,key) {
    let value = dataObject[key];
    return value !== undefined && 
        value !== "N/A" &&
        typeof value === 'number';
}

function baseValidate(dataObject,parameter){
    return baseKeys[parameter].includes(dataObject[parameter]);
}

function validate(parameterList,dataObject) {
    let output = [];
    parameterList.forEach( function(p) {
            if(summaryKeys.includes(p)){
                output.push(summaryValidate(dataObject,p));
            } else {
                output.push(baseValidate(dataObject,p));
            }
        }
    )
    return output.reduce((a,b) => {return a && b});
}

// delete soon
function summaryStatistics(dataObject) {    
    let summaryKeys = [
        'NMS-TOTAL',
        'PDSS-TOTAL',
        'PDQ8-TOTAL',
        'PDQ8-PDQSI',
        'Anxiety',
        'Depression',
        'BKS',
        'DKS',
        'FDS',
        'PTI',
        'PTT',
        'PDQ39-PDQSI',
        'PDQ39-Mob',
        'PDQ39-ADL',
        'PDQ39-Emot',
        'PDQ39-Stigma',
        'PDQ39-Soc-Sup',
        'PDQ39-Cog',
        'PDQ39-Comm',
        'PDQ39-Discom',
        'UPDRS-TOTAL',
        'PDQC-PDQSI',
        'PDQC-social/personal-activities',
        'PDQC-anx/dep',
        'PDQC-Self-care',
        'PDQC-Stress'
    ];
    let results = summaryKeys.map( x => {        
        return summaryValidate(dataObject,x);
    })

    return results.reduce((a,b) => {return a && b});
}



//------------Modular Validate f(x)--------------------------------------------------



module.exports = {
    hadsValidator,
    nmsValidator,
    nmsNoSexQsValidator,
    pdqcValidator,
    updrsValidator,
    pdssValidator,
    pdq8Validator,
    pdq39Validator,
    validate,
    summaryStatistics
}