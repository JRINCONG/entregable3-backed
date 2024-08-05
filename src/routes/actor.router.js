const { getAll, Create, getOne, Destroy, Update } = require('../controllers/actor.controller');
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