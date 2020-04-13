const expect = require('chai').expect;

describe('Fifth exercise', () => {
    context('5.1 exercise - Rest', () => {
        it('Should receive everything else', () => {
            const arr = [1, 2, 3, 4, 5, 6];
            [ x, ...y ] = arr;
            expect(x).to.equals(1);
            expect(y).to.include.members([2, 3, 4, 5, 6]);
        });
    
        it('Should add all parameters', () => {
            function somar(...args) {
                return args.reduce((total, value) => total + value);
            }
            expect(somar(1,2,3,4,5,6)).to.equals(21);
            expect(somar(1,2)).to.equals(3);
        });
    });
});