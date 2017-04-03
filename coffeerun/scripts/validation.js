(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);

        },

        isEmailPresent: function(email){

        },

        isDecafValid: function(string, integer) {

            return (string.includes('decaf') && integer >= 20);

        }

    };




    App.Validation = Validation;
    window.App = App;
})(window);
