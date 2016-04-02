/**
 * Created by gabed on 4/1/16.
 */
angular.module('homeCtrl', [])

    .controller('homeCtrl', homeCtrl);
function homeCtrl($http){
    var hc = this;
    hc.searchItems = searchItems;
    hc.mealData = [];
    hc.inputs = [];
    hc.addInputs = addInputs;
    hc.deleteIngredients = deleteIngredients;
    function deleteIngredients(){
        hc.inputs.pop();
        return hc.inputs;
    }

    function addInputs(theirIngredients){

        hc.inputs.push(theirIngredients);
        document.getElementById("ingredientInput").value = '';
    }
    function searchItems(){
            $http.get('/api/recipes/?i='+hc.inputs).success(function (data) {
                hc.mealData = [];
            document.getElementById('searchItems').disabled = 'true';
            for(var i = 0; i < 10; i++){

                hc.mealData.push(data.results[i]);
            }
            console.log(hc.mealData);
             });
    }



}