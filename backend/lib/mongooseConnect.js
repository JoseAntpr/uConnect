"use strict";

const mongoose = require('mongoose');
const localConfig = require('../localConfig');
const conn = mongoose.connection;

conn.on('error', ( err ) => {
    console.log('Error with DB connection', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log("Mongodb connected")
});

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(localConfig.bd.database);