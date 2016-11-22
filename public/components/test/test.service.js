(
    function () {
        'use strict';
        angular.module('monsoon').factory('testSvc', testSvc);

        testSvc.$inject = ['$resource'];

        function testSvc ($resource) {
            let factory = {};
            
            factory.zoneAction = $resource('/api/v1/zone/:zId/:zAction', {zId:'@zId', zAction: '@zAction'});

            return factory;
        }
    }
)();