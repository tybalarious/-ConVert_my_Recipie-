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
            document.getElementById('searchItems').disabled = 'true';
            for(var i = 0; i < 10; i++){
                hc.mealData.push(data.results[i]);


            }
            console.log(hc.mealData);

             });
    }



}