const http = require('http');
const path = require('path');   //path : 코어 모듈(내장되어있는 자바 API)
const express = require('express');
const dotenv = require('dotenv');




//1. Enviroment Variables
dotenv.config({path: path.join(__dirname, 'config', 'app.env')});

//2. Application Routers
//destruction
const { applicationRouter } = require('./routes'); //해당 디렉토리의 index.js 호출
const { SIGTERM } = require('constants');

//3. Logging

//4. Application Setup
const application = express()
    //4-1. static resources
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))

    //4-2. request body parser
    .use(express.urlencoded({extended: true}))   //application/x-wwww-form-urlencoded
    .use(express.json())                         //application/json

    //4-3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');

//5. Application  Router Setup
applicationRouter.setup(application);


//6. Server Setup
http.createServer(application)
    .on('listening', function() {
        console.log(`http server runs on ${process.env.PORT}`);
    })
    .on('error', function(error) {
        switch(error.code) {
            case 'EACCESS':
                console.log(`${process.env.PORT} requires privileges`);
                process.exit(1);    //0을 주면 정상종료
                break;
            case 'EADDRINUSE':
                console.log(`${process.env.PORT} is already in use`);
                process.exit(1);
                break; 
            default:
                throw error;
        }
    })
    .listen(process.env.PORT);




