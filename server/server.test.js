const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;


describe('Server', () => {
    it('should return Hello World response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((response) => {
                expect(response.body).toInclude({
                    error: 'Page not found.'
                });
            })
            .end(done);
    });
    
    it('should return an array of users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((response) => {
                expect(response.body).toInclude({
                    name: 'name1',
                    age: 1
                });
            })
            .end(done);
    });
});

