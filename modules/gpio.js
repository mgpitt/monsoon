(
    function () {
        'use strict';
        const Gpio = require('onoff').Gpio;

        let relay1 = new Gpio(11, 'high');
        let relay2 = new Gpio(12, 'high');

        let gpioPins = [7,11,12,13,15,16,18,22];
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

        function relayOn(gpioId, duration){
            relay1.writeSync(1);
            relay2.writeSync(0);
            return 'relay off'
        }

        function setZone(zId, zAction) {
            let zone = 'zone' + zId;
            gpioPins.forEach(function(p){
                setTimeout(function(){
                    relayOn(p, 1000)
                }, 1000)
            })
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
        exports.relayOn = relayOn;
    }
)();