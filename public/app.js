(
    function(){
        'use strict';
        angular.module('monsoon', ['monsoon.routes', 'ngAnimate', 'ngResource']).config(config);

        config.$inject = [];

        function config () {
            console.log('app config');
        }
    }
)();