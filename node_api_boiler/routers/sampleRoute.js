const express = require('express'),
        Router = express.Router();
const SampleController = require('../controllers/sampleController');
const controllerObj = new SampleController();
Router.get('/',controllerObj.create.bind(controllerObj));

module.exports = Router;