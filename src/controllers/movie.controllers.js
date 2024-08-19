const catchError = require('../utils/catchError');
const Movies = require('../models/Movie');
const Genre = require('../models/Genre');
const Actors = require('../models/Actor');
const Director = require('../models/Director');

const getAll = catchError(async(req, res) => {
    const results = await Movies.findAll({include:[Genre,Actors,Director]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movies.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movies.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movies.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movies.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

///movies/:id/genres

const setGenres= catchError(async(req, res)=>{
    const {id }=req.params
    console.log("entro al controller")
    const movie = await Movies.findByPk(id)
    await movie.setGenres(req.body)
    const genre = await movie.getGenres()
    return res.json(genre)
})

//-> /movies/:id/actors 

const setActors = catchError(async(req, res)=>{
    const { id } = req.params
    const movie = await Movies.findByPk(id)
    await movie.setActors(req.body)
    const actor = await movie.getActors()
    return res.json(actor)  

})

//-> /movies/:id/directors

const setDirectors = catchError(async(req, res)=>{
    const { id } = req.params
    const movie = await Movies.findByPk(id)
    await movie.setDirectors(req.body)
    const director = await movie.getDirectors()
    return res.json(director)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setGenres,
    setActors,
    setDirectors,
}