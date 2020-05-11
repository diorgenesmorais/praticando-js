const expect = require('chai').expect;
const senha = require('../src/senha');

describe('Desafio verificador de senha', () => {
    const pass = senha();
    it('Should more than 3 characters but than 20', () => {
        expect(pass.validator('DuckMoreVeryCharacters12')).to.false;
        expect(pass.validator('12a')).to.false;
    });
    it('Should by alphanumeric', () => {
        expect(pass.validator('l.Dwieir!')).to.false;
    });
    it('Should contain characters and number', () => {
        expect(pass.validator('a254ws')).to.true;
        expect(pass.validator('1457EWgdt78YUT')).to.true;
        expect(pass.validator('Asdgf48!')).to.false;
    })
});