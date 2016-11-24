(
    function () {
        'use strict';
        angular.module('monsoon.routes', ['ui.router']).config(routes);

        routes.$inject = ['$stateProvider', '$urlRouterProvider'];

        function routes($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('monsoon', {
                abstract: true,
                template:'<div ui-view></div>'
            })
            .state('monsoon.home', {
                url:'/',
                templateUrl:'./components/home/home.html',
                controller:'homeCtrl'
            })
            .state('monsoon.test', {
                url:'/test',
                templateUrl:'./components/test/test.html',
                controller:'testCtrl',
                controllerAs: 'vm'
            });
        }
    }
)();