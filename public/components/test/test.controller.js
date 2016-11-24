(
    function () {
        'use strict';
        angular.module('monsoon').controller('testCtrl', testCtrl);

        testCtrl.$inject = ['testSvc', '$interval'];

        function testCtrl (testSvc, $interval) {
            var vm = this;
            vm.zone1 = {
                active: false
            }
            vm.pollingMessage = '';

            function pollZone(zId) {
                return testSvc.zoneAction.get({zId}).$promise.then(function(res){
                    console.log(res.message);
                    vm.pollingMessage = res.message;
                })
            }

            $interval(function () {
                console.log(pollZone(1))
            }, 5000);

            function zoneOne () {
                let zAction = 'on';
                if(vm.zone1.active){
                    zAction = 'off'
                }
                testSvc.zoneAction.save({zId: 1, zAction: zAction}).$promise.then(function(res){
                    console.log(res);
                    if(zAction === 'off') {
                        return vm.zone1.active = false;
                    }
                    return vm.zone1.active = true;
                });
            }
            vm.zoneOne = zoneOne;

            console.log('test controller');
        }
    }
)();