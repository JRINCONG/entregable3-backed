const catchError = require('../utils/catchError');
const Actors = require('../models/Actor');


const getAll = catchError(async(req, res) => {
    const result = await Actors.findAll()
    return res.json(result)
});

const Create = catchError(async(req, res) => {
    const result = await Actors.create(req.body)
    return res.json(result)
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result = await Actors.findByPk(id)
    if(!result) return res.json({
        data:`User ${ id } not found`
    })
    return res.json(result)
});


const Destroy = catchError(async(req, res) => {
    const { id } = req.params
    const result = await Actors.destroy({where:{id}})
    if(!result) return res.json({
        data:`User ${ id } not found`
    })
    return res.json(result)
});

const Update = catchError(async(req, res) => {
    const { id } = req.params
    const result = await Actors.update(req.body,{where:{id}, returning: true})
    if(result[0] === 0) return res.sendStatus(304).json({
        data:`User ${ id } not found`
    })
    return res.json(result[1][0])
});
module.exports = {
    getAll,
    Create,
    getOne,
    Destroy,
    Update
}