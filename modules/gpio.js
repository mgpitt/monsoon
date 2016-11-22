exports.setZone = (zId, zAction) => ({message: 'setZoneStatus for ' + zId + ' to: ' + zAction});

exports.getZoneStatus = (zId) => ({message: 'getZoneStatus for ' + zId})