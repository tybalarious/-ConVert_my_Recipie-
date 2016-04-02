(function() {
    'use strict';

    angular.module('recipesCtrl', [])

        .controller('recipesCtrl', recipesCtrl);

    function recipesCtrl($http) {
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

// angular.module('homeCtrl', [])
//
//     .controller('homeCtrl', homeCtrl);
// function homeCtrl($http){
//     var hc = this;
//     hc.searchItems = searchItems;
//     hc.mealData = [];
//     hc.inputs = [];
//     hc.addInputs = addInputs;
//
//     function addInputs(theirIngredients){
//         hc.inputs.push(theirIngredients);
//         alert(theirIngredients);
//         alert(hc.inputs);
//     }
//     function searchItems(){
//         $http.get('/api/recipes/?i='+hc.inputs).success(function (data) {
//
//             for(var i = 0; i < 10; i++){
//                 hc.mealData.push(data.results[i]);
//             }
//             console.log(hc.mealData);
//         });
//     }
//
//
//
// }