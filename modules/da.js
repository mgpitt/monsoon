(
    function () {
        'use strict';
        const Sequelize = require('sequelize');

        const sequelize = new Sequelize('postgres://uryafoec:A24a3cOosXHCaPZRDdfJ1YGZSSLT9Dti@elmer.db.elephantsql.com:5432/uryafoec');

        

        let Zone    = sequelize.import("../models/Zone.js");
        let User    = sequelize.import("../models/User.js") 


        User.sync({
            force: true
        }).then(function () {
            // Table created
            return User.create({
                firstName: 'John',
                lastName: 'Hancock'
            });
        });

        Zone.sync({
            force: true,
        }).then(function () {
            return Zone.create({
                zoneId: 1,
                zoneName: 'Main Zone',
                zoneOn: false
            })
        })


        function findAllUsers () {
            return User.findAll();
        }

        function allZones () {
            return Zone.findAll();
        }

        exports.findAllUsers = findAllUsers;

        exports.allZones = allZones;

    }
)();