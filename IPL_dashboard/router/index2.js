var app = angular.module('app', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "signin2.html",
        controller: "signinCtrl",
      })
      .when("/IPLdashboard", {
        templateUrl: "ipldashboard.html",
        controller: "apiCtrl",
      })
      .when("/register", {
        templateUrl: "register2.html",
        controller: "registerCtrl",
      })
      .otherwise({
        redirectTo: "/"
      });
})



