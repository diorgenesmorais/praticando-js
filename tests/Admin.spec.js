const expect = require('chai').expect;
const Admin = require('../src/Admin');

describe('Admin test', () => {
    let admin;
    beforeEach(function() {
        admin = new Admin('diorgenesmorais.dm@gmail.com', 'q1w236');
    })

    it('Should instantiate', () => {
        expect(admin).to.exist;
    });

    it('Should be administrator', () => {
        expect(admin.isAdmin()).to.equals(true);
    });
});