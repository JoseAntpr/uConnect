const express = require('express');

const app = express();

const Connection = require('../models/Connection');

app.get('/connection/:user', (req, res) => {
    let userId = req.params.user;

    Connection.find({$or:[{userOne: userId},{userTwo:userId}]})
    .populate("userOne", "name")
    .populate("userTwo", "name")
    .exec((err, connections) => {
        if ( err ) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }

        connections = connections.map( connection => {
            let user;

            if( String(connection.userOne._id) === userId ) {
                user = connection.userTwo;
            } 
            
            if ( String(connection.userTwo._id) === userId ) {
                user = connection.userOne;
            }
            return {
                connection: connection.connection,
                user: user
            }
        }
        )

        res.status(200).json({
            ok: true,
            connections: connections
        });
    });
});


app.post('/connection', (req, res) => {
    let body = req.body;

    if( body.userOne == body.userTwo) {
        return res.status(409).json({
            ok: false,
            error: 'Not allowed taht UserOne and UserTwo are the same value'
        });
    }

    let connection =  new Connection({
        connection: body.connection,
        userOne: body.userOne,
        userTwo: body.userTwo
    });


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