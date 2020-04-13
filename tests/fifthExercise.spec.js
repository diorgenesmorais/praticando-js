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

    context('5.2 exercise - Spread', () => {
        const usuario = {
            nome: 'Diego',
            idade: 23,
            endereco: {
                cidade: 'Rio do Sul',
                uf: 'SC',
                pais: 'Brasil',
            }
        };
        it('Should contain the name Gabriel', () => {
            const usuario2 = {...usuario, nome: 'Gabriel'};
            const expected = {nome: 'Gabriel', idade: 23, endereco: {cidade: 'Rio do Sul', uf: 'SC', pais: 'Brasil'}};
            expect(usuario2).to.deep.include(expected);
        });
        it('Should the city Lontras', () => {
            const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
            const expected = {nome: 'Diego', idade: 23, endereco: {cidade: 'Lontras', uf: 'SC', pais: 'Brasil'}};
            expect(usuario3).to.deep.include(expected);
        });
    });
});
