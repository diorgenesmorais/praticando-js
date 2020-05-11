"use strict";
const senha = function() {
    const MIN_PASSWORD_LEN = 4;
    const MAX_PASSWORD_LEN = 19;
    
    return {
        validator: function(password) {
            return (validatePasswordLength(password) && validatePasswordChars(password));
        }
    }
    /**
     * Validar o comprimento da senha
     * @param {string} password
     * @returns true se estiver entre o min e o max
     */
    function validatePasswordLength(password) {
        return (password.length >= MIN_PASSWORD_LEN && password.length <= MAX_PASSWORD_LEN);
    }
    /**
     * Validar se o parâmetro passado é letras e números.
     * @param {string} password
     * @returns true se for alfanumerico contendo letras e números.
     */
    function validatePasswordChars(password) {
        return isAlphanumeric(password) && containsCharsAndNumber(password);
    }
    function isAlphanumeric(word) {
        const rex = /^[a-z\u00e0-\u00f50-9]+$/i;
        return rex.test(word);
    }
    function containsCharsAndNumber(word) {
        const pattern = /([a-z\u00e0-\u00f5]{1,}[0-9]{1,}|[0-9]{1,}[a-z\u00e0-\u00f5]{1,})+$/i;
        return pattern.test(word);
    }
}

module.exports = senha;
