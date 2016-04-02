/**
 * Created by gabed on 4/1/16.
 */
angular.module('signupCtrl', [])
    .controller('signupCtrl',signupCtrl);
function signupCtrl($state, $scope){
    var sc = this;
    sc.signingUp = signingUp;
    function signingUp(theirName,theirEmail, theirPass){
        var ref = new Firebase("https://convertMyRecipe.firebaseio.com");
        ref.createUser({
            email    : theirEmail,
            password : theirPass
        }, function(error, userData) {
            if (error) {
                error = "Error creating user:"+ error;
                $scope.err = error;
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                ref.authWithPassword({
                    email    : theirEmail,
                    password : theirPass
                }, function(error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                        $state.go('tabsController.home');
                    }
                });
            }
        });

    }

}