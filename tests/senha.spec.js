const expect = require('chai').expect;
const senha = require('../src/senha');

describe('Desafio verificador de senha', () => {
    it('Should more than 3 characters but than 20', () => {
        const pass = senha();
        expect(pass.verify('1234')).to.true;
    });
});