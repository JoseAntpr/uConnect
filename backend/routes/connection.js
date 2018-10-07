const express = require('express');

const app = express();

const Connection = require('../models/Connection');

app.get('/connection/:user', (req, res) => {
    let userId = req.params.user;

    Connection.find({$or:[{userOne: userId},{userTwo:userId}]})
    .populate("userOne")
    .populate("userTwo")
    .exec((err, connections) => {
        if ( err ) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }

        res.status(200).json({
            ok: true,
            user: connections
        });
    });
});


app.post('/connection', (req, res) => {
    let body = req.body;

    let connection =  new Connection({
        connection: body.connection,
        userOne: body.userOne,
        userTwo: body.userTwo
    })

    connection.save(( err, connectionDB ) => {
        if ( err ) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }

        res.status(200).json({
            ok: true,
            user: connectionDB
        });
    })
});


module.exports = app;