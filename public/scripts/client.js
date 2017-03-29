var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.config(['$routeProvider', function($routeProvider) {


    $routeProvider
        .when ('/spacing_view', {
          templateUrl: '/views/spacing_view.html',
          controller: 'SpacingController',
          controllerAs: 'sc'
        })
        .when ('/wrap_view', {
            templateUrl: '/views/wrap_view.html',
            controller: 'WrapController',
            controllerAs: 'wc'
        })
        .when ('/input_view', {
            templateUrl: '/views/input_view.html',
            controller: 'InputController',
            controllerAs: 'ic'
        })
        .when ('/admin_view', {
            templateUrl: '/views/admin_view.html',
            controller: 'AdminController',
            controllerAs: 'ac'
        })
        .otherwise ({
            redirectTo: '/wrap_view'
        });

}]);//end of myApp.config
