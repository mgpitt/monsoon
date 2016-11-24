(
    function () {
        'use strict';
        angular.module('monsoon').controller('homeCtrl', homeCtrl);

        homeCtrl.$inject = [];

        function homeCtrl(){
            console.log('home controller');
        }
    }
)();