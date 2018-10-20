
const app = require('../server').app;
const request = require('supertest');
const { expect } = require('chai');

// Testing server
// GET / 
// GET /user

describe('Server', () => {
    describe('GET /', () => {
        it('Should return Splendid result', done => {
            request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.text).to.include('Splendid');
                    done();
                });
        });
    });
    describe('GET /user', () => {
        it('Should return Ido\'s user', done => {
            request(app)
                .get('/user')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.include({
                        name: 'ido',
                        age: 39
                    });
                    done();
                });
        });
    });
});

