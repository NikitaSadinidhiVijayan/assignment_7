(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isDecaf: function(textinput, range) {
            //console.log(textinput === 'decaf');
            if (/decaf/.test(textinput) && range >= 20) {
                return false;
            } else {
                return true;
            }
        }
    };


    App.Validation = Validation;

    window.App = App;
})(window);
