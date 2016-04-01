/**
 * Created by gabed on 4/1/16.
 */
angular.module('firebase-utilities', ['firebase'])
.factory('firebaseUtilFactory', ['$window', '$q', function($window,$q){
        'use strict';
        var ref = new Firebase("https://convertMyRecipe.firebaseio.com");
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });

    }]);