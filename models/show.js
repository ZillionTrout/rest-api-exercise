const { Schema, model } = require('mongoose');

const showSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
        trim: true
    },
    creator: {
        type: String
    },
    launched: {
        type: Number
    },
    genre: {
        type: String
    },
    image: {
        type: String 
    },
    description: {
        type: String}
    },
    {
        timestamps: true
    }
);

const Show = model('Show', showSchema);

module.exports = Show;