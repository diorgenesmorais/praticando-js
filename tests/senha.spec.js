const expect = require('chai').expect;
const senha = require('../src/senha');

describe('Desafio verificador de senha', () => {
    const pass = senha();
    it('Should more than 3 characters but than 20', () => {
        expect(pass.validator('DuckMoreVeryCharacters')).to.false;
        expect(pass.validator('123')).to.false;
    });
    it('Should by alphanumeric', () => {
        expect(pass.validator('l.Dwieir!')).to.false;
    })
});