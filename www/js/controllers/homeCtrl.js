/**
 * Created by gabed on 4/1/16.
 */
angular.module('homeCtrl', [])

    .controller('homeCtrl', homeCtrl);
function homeCtrl($http){
    var hc = this;
    hc.searchItems = searchItems;

    function searchItems(){
        $http.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3').then(function(resp) {
            console.log('Success', resp);
            // For JSON responses, resp.data contains the result
        }, function(err) {
            console.error('ERR', err);
            // err.status will contain the status code
        })
    }


}