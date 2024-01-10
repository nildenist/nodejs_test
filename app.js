const express = require('express')
// const db = require('./db')
var cors = require("cors");
const app = express()
const port = 8080
const bodyParser = require("body-parser");
require('@google-cloud/profiler').start({
    serviceContext: {
      service: 'nilden-city_service',
      version: '1.0.0',
    },
  });

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });


// var corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
 

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
// Get route with name districts that returns  city districts sent with state_id
app.get('/hello', (req, res) => {
  res.send('Hello World! to  ');
});
app.get('/ozgur', (req, res) => {
    res.send('Hello World! ');
  });

// GET
app.get('/countries', async (req, res) => {

    console.log("GET /countries");
    try {
        res.send('Countries');
      
        
    } catch (err) {
        res.status(400).send(new Error('description'));
    }
});


  
  
  
 
app.listen(port, () => console.log(`Listening on port ${port}`));
