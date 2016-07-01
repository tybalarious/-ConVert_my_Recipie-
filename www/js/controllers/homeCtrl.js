/**
 * Created by gabed on 4/1/16.
 */
angular.module('homeCtrl', [])
    .controller('homeCtrl', homeCtrl);
function homeCtrl($http,$scope,$ionicPopup){
    var hc = this;
    hc.searchItems = searchItems;
    hc.mealData = [];
    hc.inputs = [];
    hc.parseIngredients = [];
    hc.sampleArr = [];
    hc.addInputs = addInputs;
    hc.allAddedIngredients = [];
    hc.init = init;
    //hc.updating = updating;
    hc.deleteIngredients = deleteIngredients;
    hc.addMissingIngredients = addMissingIngredients;

    //function updating(){
    //    $scope.$apply();
    //}

    function addMissingIngredients(theirAddedIngredients){
        hc.allAddedIngredients.push(theirAddedIngredients);
        document.getElementById('missing').value = '';
        $scope.$apply();

    }

    function init(theIndex,ingredients){
        //hc.parseIngredients.push(['test']);
        //hc.sampleArr.push(ingredients);
        //hc.parseIngredients.push(hc.sampleArr);
        var w = window;

            w["arr_"+theIndex] = [];

        arr_0.push(ingredients);
        console.log(arr_0);

    }
    function deleteIngredients(){
        hc.inputs.pop();
        return hc.inputs;
    }

    function addInputs(theirIngredients){
        if(theirIngredients){
            hc.inputs.push(theirIngredients);
            hc.theirIngredients = null;
            document.getElementById("ingredientInput").value = '';
        }
        else{
            document.getElementById("ingredientInput").value = '';
        }


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