/**
 * Created by gabed on 4/1/16.
 */
angular.module('homeCtrl', [])

    .controller('homeCtrl', homeCtrl);
function homeCtrl($http){
    var hc = this;
    hc.searchItems = searchItems;

    function searchItems(){
        $http.get('/api/recipes/').success(function (data) {
            hc.itemNames = [];
            for(var i = 0; i < 10; i++){
                hc.itemNames.push(data.results[i].title);
            }
               console.log();
             });
    }


}