(
  function () {
    'use strict';
    module.exports = (sequelize, DataTypes) => sequelize.define("Zone", {
      zoneId: DataTypes.INTEGER,
      zoneName: DataTypes.STRING,
      zoneOn: DataTypes.BOOLEAN
    })
  }
)();