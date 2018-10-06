const utils = require('./utils');

it('should add two numbers', () => {
    let result = utils.add(33, 11);
    if(result !== 44) {
        throw new Error(JSON.stringify(result));
    }
});

it('should square a number', () => {
    let result = utils.square(5);
    if(result !== 25) {
        throw new Error(JSON.stringify(result));
    }
});