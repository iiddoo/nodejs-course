const { connect } = require('../mongodb-connect');
const { disconnect } = require('../mongodb-connect');

const { expect } = require('chai');

describe('Mongodb connect', () => {
    it('Should connect to mongodb', async () => {
        const connection = await connect();
        expect(connection).to.be.true;
        await disconnect();
    });
})