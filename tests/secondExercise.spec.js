const expect = require('chai').expect;

describe('Second exercise', () => {
    let usuarios;

    beforeEach(() => {
        usuarios =  [
            { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
            { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
            { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
        ];
    });

    it('Should instantiate', () => {
        expect(usuarios).to.exist;
    });

    it('Should contain an array with ages', () => {
        const ages = usuarios.map(u => u.idade);
        expect(ages).to.include.members([23, 15, 30]);
    });
});