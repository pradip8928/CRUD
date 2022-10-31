const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,

        unique: true

    },
    daySinceAt: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('food', foodSchema)