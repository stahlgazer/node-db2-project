const express = require('express');
const helmet = require('helmet');
const server = express();
const carsRouter = require('../cars/carsRouter.js');

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter);

module.exports = server;