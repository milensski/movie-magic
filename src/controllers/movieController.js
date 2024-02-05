const router = require("express").Router();

const movieService = require("../services/movieService")

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {

  const movieData = req.body;

  await movieService.create(movieData)

  res.redirect("/");
});

module.exports = router;
