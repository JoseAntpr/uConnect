const express = require('express');

const app = express();

const User = require('../models/User');

app.get('/user', async (req, res, next) => {

    try{
        let users = await User.find({});

        res.status(200).json({
            ok: true,
            user: users
        });

    }catch (e) {
        e.status = 400;
        return next(e);
    }

});


app.post('/user', async (req, res, next) => {
    let body = req.body;

    let user = new User({
        name: body.name
    });
    try {
        let userDB = await user.save();

        res.status(200).json({
            ok: true,
            user: userDB
        });
    }catch (e) {
        e.status = 400;
        return next(e);
    }
});

module.exports = app;