const mongoose = require("mongoose")


const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 0,
        max: 3000
    },
    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    description:{
        type: String,
        required: true,
        maxLength: 2000,
    },
    imageURL: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    cast: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Cast"
        }
    ]
});

const Movie = mongoose.model('Movie', movieSchema)


module.exports = Movie