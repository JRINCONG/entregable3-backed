const { getAll, create, getOne, remove, update, setGenres, setActors, setDirectors } = require('../controllers/movie.controllers');
const express = require('express');

const routerMovies = express.Router();

routerMovies.route('/')
    .get(getAll)
    .post(create);

///movies/:id/genres
routerMovies.route('/:id/genres')
    .post(setGenres)
    
routerMovies.route('/:id/actors')    
    .post(setActors)


routerMovies.route('/:id/directors')
   .post(setDirectors)    

routerMovies.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMovies;