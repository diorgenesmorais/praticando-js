const expect = require('chai').expect;

describe('Fourth exercise', () => {
    context('4.1 Desestruturação simples', () => {
        it('Should obtain three properties', () => {
            const empresa = {
                nome: 'Rocketseat',
                endereco: {
                cidade: 'Rio do Sul',
                estado: 'SC',
                }
            };
            const { nome, endereco: { cidade, estado } } = empresa;
            expect(nome).to.equals('Rocketseat');
            expect(cidade).to.equals('Rio do Sul');
            expect(estado).to.equals('SC');
        });
    });

    context('4.2 Desestruturação em parâmetros', () => {
        it('Should break down the function parameters', () => {
            function mostrarInfo({ nome, idade }) {
                return `${nome} tem ${idade} anos`;
            }
            expect(mostrarInfo({nome: 'Diego', idade: 23})).to.equals('Diego tem 23 anos');
        })
    })
});