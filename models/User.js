(
    function () {
        'use strict';

        module.exports = (sequelize, DataTypes) => sequelize.define("User", {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING
        })
    }
)();