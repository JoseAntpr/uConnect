const mongoose = require('mongoose');

let valid_connections = {
    values: ['FAMILY', 'FRIENDS', 'UNFAMILIAR'],
    message: '{VALUE} is not valid connection'
}

let Schema = mongoose.Schema;

let connectionSchema = new Schema({
    connection: {
        type: String,
        default: 'UNFAMILIAR',
        enum: valid_connections,
        required: [true, 'Connection type is required']
    },
    userOne: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    userTwo: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

connectionSchema.index({userOne: 1, userTwo: 1}, { unique: true })

module.exports = mongoose.model('Connection', connectionSchema);

