const { getAll, Create, getOne, Destroy, Update } = require('../controllers/actor.controllers');
const express = require('express');

const routerActors = express.Router();

routerActors.route('/')
    .get(getAll)
    .post(Create)

routerActors.route('/:id')
        .get(getOne)
        .delete(Destroy) 
        .put(Update)   

module.exports = routerActors;