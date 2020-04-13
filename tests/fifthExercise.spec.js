const expect = require('chai').expect;

describe('Fifth exercise', () => {
    it('5.1 Rest', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        [ x, ...y ] = arr;
        expect(x).to.equals(1);
        expect(y).to.include.members([2, 3, 4, 5, 6]);
    });
});