(
    function () {
        'use strict';
        angular.module('monsoon').controller('testCtrl', testCtrl);

        testCtrl.$inject = ['testSvc'];

        function testCtrl (testSvc) {
            var vm = this;
            vm.zone1 = {
                active: false
            }
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