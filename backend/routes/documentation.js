var express = require('express');

var app = express();

app.get('/', (req, res, next) => {

    res.redirect("https://documenter.getpostman.com/view/1688848/RWgqWzJk");
});

module.exports = app;