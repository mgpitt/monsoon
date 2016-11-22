'use strict'

const Hapi = require('hapi');

const server = new Hapi.Server();

const GpioLib = require('./modules/gpio.js');

const Da = require('./modules/da.js');

server.connection({
	port: 3000
});


server.register(require('inert'), (err) => {

	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});

	server.route({
		method: 'GET',
		path: '/api',
		handler: function (request, reply) {
			var response = {
				message:'welcome to the monsoon api'
			};
			reply(response);
		}
	});

	server.route({
		method: 'POST',
		path: '/api/v1/zone/{zId}/{zAction}',
		handler: function (request, reply) {
			
			var response = GpioLib.setZone(request.params.zId, request.params.zAction);

			reply(response)
		}
	});

	server.route({
		method:'GET',
		path:'/api/v1/users',
		handler: function (request, reply) {

			reply(Da.findAllUsers());
		}
	})

	server.route({
		method:'GET',
		path:'/api/v1/zones',
		handler: function (request, reply) {

			reply(Da.allZones());
		}
	})

	
	server.route({
		method: 'GET',
		path: '/api/v1/zone/{zId}',
		handler: function (request, reply) {
			
			var response = GpioLib.getZoneStatus(request.params.zId);

			reply(response)
		}
	});

	server.start((err) => {

		if (err) {
			throw err;
		}

		console.log('Server running at:', server.info.uri);
	});
});