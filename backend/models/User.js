const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']}
});

module.exports = mongoose.model('User', userSchema);