const router = require("express").Router()
const movieService = require("../services/movieService")

router.get('/', async (req,res) => {

    const movies = await movieService.getAll();

    console.log(movies);
    
    res.render('home')
});



module.exports = router