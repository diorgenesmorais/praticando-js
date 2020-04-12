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

    it('Should contain only users who work at Rocketseat and are over 18 years old', () => {
        const [ users ] = usuarios.filter(u => u.empresa === 'Rocketseat' && u.idade > 18);
        expect(users).to.include({ nome: 'Diego', idade: 23, empresa: 'Rocketseat' });
    });

    it('Should find out enterprise Google', () => {
        const enterprise = usuarios.find(u => u.empresa === 'Google');
        expect(enterprise).to.be.an('undefined');
    });

    it('Should find out enterprise Rocketseat', () => {
        const { empresa } = usuarios.find(u => u.empresa === 'Rocketseat');
        expect(empresa).to.equal('Rocketseat');
    });
});