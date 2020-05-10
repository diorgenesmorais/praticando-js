"use strict";
const senha = function() {
    const MIN_PASSWORD_LEN = 4;
    const MAX_PASSWORD_LEN = 19;
    
    return {
        validator: function(password) {
            if (!validatePasswordLength(password))
                return false;
            if (!isAlphanumeric(password))
                return false;
            return true;
        }
    }

    function validatePasswordLength(password) {
        return (password.length >= MIN_PASSWORD_LEN && password.length <= MAX_PASSWORD_LEN);
    }
    function isAlphanumeric(word) {
        const rex = /^[a-z0-9]+$/i;
        return rex.test(word);
    }
}

module.exports = senha;
