"use strict";
const senha = function() {
    return {
        verify: function(password) {
            return password.length > 3 && password.length < 20;
        }
    }
}

module.exports = senha;
