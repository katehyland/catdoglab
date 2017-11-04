var app = angular.module('catDog', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
    })
    .when('/cat', {
      templateUrl: 'view1.html',
    })
    .when('/dog', {
      templateUrl: 'view2.html',
    })
    
    .otherwise({
      template: `<h1>Woof. This page does not exist. What are you doing right meow?</h1>`
    });
  
  $locationProvider.hashPrefix('');
});
