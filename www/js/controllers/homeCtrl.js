/**
 * Created by gabed on 4/1/16.
 */
angular.module('homeCtrl', [])

    .controller('homeCtrl', homeCtrl);
function homeCtrl($http){
    var hc = this;
    hc.searchItems = searchItems;
    hc.mealData = [];
    function searchItems(){
        $http.get('/api/recipes/').success(function (data) {

            for(var i = 0; i < 10; i++){
                hc.mealData.push(data);
                console.log(data);
                console.log('here' + i);
                console.log(hc.mealData);

            }

             });
    }



}