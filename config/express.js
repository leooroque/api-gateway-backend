var express = require('express');
var load = require('consign');
const bodyParser = require('body-parser');


module.exports = function () {
    var application = express();

    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({extended:true}));
    
    load ({cwd: '../api-gateway-backend/api'})
    .include('routes')
    .include('controller')
    .into(application);

    return application;
}