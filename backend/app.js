const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Conection with Database
require('./lib/mongooseConnect');

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));





app.listen('3000', () => {
    console.log('Listen in port: ', 3000);
});