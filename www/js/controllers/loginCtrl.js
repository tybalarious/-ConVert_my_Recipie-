/**
 * Created by gabed on 4/1/16.
 */

angular.module('loginCtrl', ['firebase'])
.controller('loginCtrl',loginCtrl);
function loginCtrl($firebaseAuth,$state){
    var lc = this;
    lc.hello = 'hello its me';
    lc.login = login;
    lc.loginWithFb = loginWithFb;
    var ref = new Firebase("https://convertMyRecipe.firebaseio.com");
    var authObject = $firebaseAuth(ref);

    function login(theirEmail, theirPass){
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
    function loginWithFb(){

        authObject.$authWithOAuthPopup('facebook').then(function(authData){
            console.log(authData);
            $state.go('tabsController.home');
        }).catch(function(error){
            console.log('error is '+error);
        })
    }
}