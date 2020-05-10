const expect = require('chai').expect;

const Calculadora = require('../src/Calculadora');

describe('Teste calculadora', () => {
    it('Should sum', () => {
        const calc = new Calculadora();
        expect(calc.soma(1,2)).to.equals(3);
    })
})