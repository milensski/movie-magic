import mongoose, { Schema, Model } from "mongoose";


const movieSchema = new Schema({
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
        maxLength: 255,
    },
    imageURL: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    cast: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cast"
        }
    ]
});

const Movie = Model('Movie', movieSchema)


module.exports = Movie