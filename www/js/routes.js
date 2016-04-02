angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html'
      }
    }
  })

        .state('tabsController.recipes', {
    url: '/Recipes',
    views: {
      'tab2': {
        templateUrl: 'templates/recipes.html'
      }
    }
  })

        .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

        .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

        .state('signup', {
    url: '/Signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
    
        .state('shoppinglist', {
    url: '/ShoppingList',
    templateUrl: 'templates/shoppingList.html',
    controller: 'shoppingCtrl'
  });

$urlRouterProvider.otherwise('/page5');

  

});