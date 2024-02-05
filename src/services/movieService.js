const Movie = require("../models/Movies");

exports.getAll = () => Movie.find();

exports.create = (movieData) => Movie.create(movieData);
