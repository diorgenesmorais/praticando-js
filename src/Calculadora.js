class Calculadora {
    soma(...args) {
        return args.reduce((total, next) => total + next);
    }
}

module.exports = Calculadora;