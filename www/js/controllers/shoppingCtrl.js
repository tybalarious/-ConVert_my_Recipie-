/**
 * Created by THATONEGUY on 4/1/16.
 */
(function() {
    'use strict';

    angular.module('shoppingCtrl', [])

        .controller('shoppingCtrl', shoppingCtrl);

    function shoppingCtrl($http) {
        var rc = this;
        rc.searchItems = searchItems;
        rc.mealData = [];

        function searchItems() {
            $http.get('/api/recipes/?q='+rc.theirRecipes).success(function (data) {
                rc.mealData = [];
                for(var i = 0; i < 10; i++){
                    rc.mealData.push(data.results[i]);
                }
                console.log(rc.mealData);
            });
        }

    }
}());