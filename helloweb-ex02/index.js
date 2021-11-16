const http = require('http');
const express = require('express');

const port = 8080;

//Application Setup
const application = express();


//Server Setup
http.createServer(application)
    .on('listening', function() {

    })
    .on('error', function(error) {

    })


