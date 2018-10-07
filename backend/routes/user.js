const express = require('express');

const app = express();

const User = require('../models/User');

app.get('/user', (req, res) => {

    User.find( (err, users) => {
        if ( err ) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }

        res.status(200).json({
            ok: true,
            user: users
        });
    });

});


app.post('/user', (req, res) => {
    let body = req.body;

    let user = new User({
        name: body.name
    });

    console.log('user', user);

    user.save((err, userDB) => {
        if ( err ) {
            return res.status(400).json({
                ok: false,
                error: err
            });
        }

        res.status(200).json({
            ok: true,
            user: userDB
        });
    })
});

module.exports = app;