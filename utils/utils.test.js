const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            let response = utils.add(33, 11);
            expect(response).toBe(44).toBeA('number');
        });
        
        it('should asyc add 2 numbers', (done) => {
            utils.asyncAdd(4 ,3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(7, (square) => {
            expect(square).toBe(49).toBeA('number');
            done();
        });
    });
    
   
    
    it('should square a number', () => {
        let response = utils.square(5);
        expect(response).toBe(25).toBeA('number');
    });
});

