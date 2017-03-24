'use strict';

import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import importPedidos from './service/import-pedido.js';
/**
 * estudar pesquisas com o mongodb
 */
var app = express();
var port = process.env.PORT || 8080;

 // ROUTERS
importPedidos(app);


// configuration ============================================================================================
app.use(express.static(__dirname + '/public'));                 // set the static files location
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride()); // simulate DELETE and PUT

mongoose.connect('mongodb://localhost/loja', function(err, res) {
	if (err) {
		console.log('error connecting to MongoDB Database. ' + err);
	} else {
		console.log('Connected to Database');
    
    //mongoose.connection.db.dropDatabase();
	}
});

app.listen(port);
console.log('Listenning on port ' + port);