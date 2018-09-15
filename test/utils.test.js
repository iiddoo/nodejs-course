// example tests file

const utils = require('../utils');

// mocha
/*******/
// first, install mocha: 'npm i mocha -D' or 'npm install moach --save-dev'
// then, run it: 'npm test'

// to run with nodemon - just type: 'nodemon --exec \"npm test\"'
// or add as script to package.json and run: 'npm run test-watch'

// example 1 - test pass
it('Should add two numbers', () => {
    const result = utils.add(2, 3);
    if (result !== 5) {
        throw new Error(`Expected result to be 5, but got: ${result}`);
    }
});

// example 2 - test fails
it('Should square number', () => {
    const result = utils.square(2);
    if (result !== 4) {
        throw new Error(`Expected result to be 4, but got: ${result}`);
    }
});

// chai
/******/
// install chai: 'npm i chai -D' or 'npm install chai --save-dev'
const { expect } = require('chai');

// example 3 - using chai with expect
it('Should add two numbers', () => {
    const result = utils.add(2, 3);
    expect(result).to.equal(5);
});

// example 4 - type check
it('Should be a number', () => {
    const result = utils.square(2);
    expect(result).to.be.a('number');
});

// example 5 - check object properties
it('Should set user last and first name', () => {
    const user = {age: 150, city: 'Tel Aviv'};
    const result = utils.setName(user, 'Ido Lev');
    expect(result).to.include({
        firstName: 'Ido',
        lastName: 'Lev'
    });
});

// example 6 - test async functions
it('Should async return string', async () => {
    const result = await utils.asyncFunc();
    expect(result).to.be.a('string'); 
});

// example 7 - gather tests using describe
describe('Utils', () => {
    it('Should add two numbers', () => {
        const result = utils.add(2, 3);
        expect(result).to.equal(5);
    });

    it('Should be a number', () => {
        const result = utils.square(2);
        expect(result).to.be.a('number');
    });
});