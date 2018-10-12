const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Conection with Database
require('./lib/mongooseConnect');

app.use(cors())

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));


// Routes
app.use(require('./routes/user'));
app.use(require('./routes/connection'));

// Error Handler
app.use( (err, req, res, next) => {
    res.status(err.status || 500 );

    return res.json({ ok: false, error: err.message});
})


app.listen('4000', () => {
    console.log('Listen in port: ', 4000);
});