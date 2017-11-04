var app = angular.module('catDog', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
    })
    .when('/cat', {
      templateUrl: 'view1.html',
    })
    .when('/dog', {
      templateUrl: 'view2.html',
    })
    .when('/sloth', {
      templateUrl: 'view3.html',
    })
    .when('/otter', {
      templateUrl: 'view4.html',
    })
    .otherwise({
      template: `<h1>Ruh Roh. This is not a valid web page ya big dummy.</h1><br>
      <img src="https://pbs.twimg.com/media/ClGHY7JWkAAT7CS.jpg">`
    });
  
  $locationProvider.hashPrefix('');
});
