const expect = require('chai').expect;
const Usuario = require('../src/Usuario');

describe('User test', () => {
    let user;
    beforeEach(function() {
        user = new Usuario('diorgenesmorais@gmail.com', 'Oyp@7503');
    });

    it('Should instantiate', () => {
        expect(user).to.exist;
    });

    it('Should not be an administrator', () => {
        expect(user.isAdmin()).to.equals(false);
    });
});