const express = require('express');
const routerActors = require('./actor.router');
const routerGenre = require('./genre.router');
const routerDirector = require('./director.router');
const routerMovies = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/actors",routerActors)
router.use("/genres",routerGenre)
router.use("/directors",routerDirector)
router.use("/movies",routerMovies)

module.exports = router;