// const tf = require('@tensorflow/tfjs');
// require('@tensorflow/tfjs-node');
const prep = require('./tensorFlowPrep');

var tt = {
    'testData': {
        'barry': 1,
        'alpha': 1,
        'beta': 2,
        'gamma': 3
    },
    'trainingData' : [
        {'barry': 2,
        'alpha': 2,
        'beta': 4,
        'gamma': 6},
        {'barry': 3,
        'alpha': 3,
        'beta': 6,
        'gamma': 9},
        {'barry': 4,
        'alpha': 4,
        'beta': 8,
        'gamma': 12}
    ]
}


var dataSpec = {
    'subject': 'barry',
    'source': ['alpha','beta','gamma']
}

// let testtest = prep.testPrep(tt.testData,dataSpec);
// console.log(testtest);
// let traintrain = prep.trainPrep(tt.trainingData,dataSpec);
// console.log(traintrain);

let test = prep.prepTfjs(tt,dataSpec);
console.log(test)