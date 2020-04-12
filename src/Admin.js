const Usuario = require('./Usuario');

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

module.exports = Admin;
