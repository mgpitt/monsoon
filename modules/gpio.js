(
    function () {
        'use strict';

        let zoneStatus = {
            zone1: {
                on: false
            },
            zone2: {
                on: false
            },
            zone3: {
                on: false
            },
            zone4: {
                on: false
            },
            zone5: {
                on: false
            },
            zone6: {
                on: false
            },
            zone7: {
                on: false
            },
            zone8: {
                on: false
            }
        }

        function setZone(zId, zAction) {
            let zone = 'zone' + zId;
            if (zoneStatus[zone].on = true && zAction === 'off') {
                zoneStatus[zone].on = false;
            } else if (zoneStatus[zone].on = false && zAction === 'on') {
                zoneStatus[zone].on = true;
            }
            return {
                message: 'setZoneStatus for ' + zId + ' to: ' + zAction
            }
        }

        function getZoneStatus(zId) {
            let zone = 'zone' + zId;
            let status = 'off';
            if (zoneStatus[zone].on === true) {
                status = 'on'
            }
            return {
                message: 'status for ' + zId + 'is ' + status
            };
        }

        exports.setZone = setZone;
        exports.getZoneStatus = getZoneStatus;
    }
)();