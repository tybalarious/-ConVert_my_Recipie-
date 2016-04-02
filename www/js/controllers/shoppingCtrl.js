/**
 * Created by THATONEGUY on 4/1/16.
 */
(function() {
    'use strict';

    angular.module('shoppingCtrl', [])

        .controller('shoppingCtrl', shoppingCtrl);

    function shoppingCtrl($http) {
        var sc = this;
        sc.searchItems = searchItems;
        sc.mealData = [];

        function searchItems() {
            $http.get('/api/recipes/?q='+sc.theirRecipes).success(function (data) {
                sc.mealData = [];
                for(var i = 0; i < 10; i++){
                    sc.mealData.push(data.results[i]);
                }
                console.log(sc.mealData);
            });
        }

    }
}());