(
    function () {
        'use strict';
        const five = require("johnny-five");
        const Raspi = require("raspi-io");
        const board = new five.Board({
            io: new Raspi()
        });

        let zone1 = new five.Relay(0);

        let zone2 = new five.Relay(1);

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
            console.log('relay toggle');
           zone1.toggle();
           zone2.toggle();
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