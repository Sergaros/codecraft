'use strict'

const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = Promise;

mongoose.connect(config.get('mongoose.uri'), {useMongoClient: true});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

let conn = mongoose.connection;
conn.once('open', function() {
  console.log('Mongoose connection complete!');
});

process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through app termination');
		process.exit(0);
	});
});
