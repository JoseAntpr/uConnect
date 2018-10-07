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


mongoose.connect(localConfig.bd.database);