require('../models')
const app = require('../app')
const Actor = require('../models/Actor')
const Directors = require('../models/Director')
const Genres = require('../models/Genre')
const request = require('supertest')


const movie ={
    name: 'Terminator',
    image: 'https://image',
    synopsis: 'matar a jhon Hoconor',
    releaseYear: 2002
};


let id;

const BASE_URL='/api/v1/movies';

test("POST => BASE_URL should return, res.statusCode(201), res.body.name === movie.name",async()=>{
    const res = await request(app)
    .post(BASE_URL)
    .send(movie)
   id= res.body.id

    expect(res.statusCode).toBe(201)
    expect(res.body.name).toBe(movie.name)
});

test("Get => BASE_URL should return res.statusCode(200), res.body.length === 1",async()=>{
    const res = await request(app)
    .get(BASE_URL)
    
 
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(1)
    expect(res.body[0].actors[0]).toBe()
    expect(res.body).toBeDefined()
})


test("Get => BASE_URL/:id should return res.statusCode(200), res.body.name === movies.name",async()=>{
    const res = await request(app)
    .get(`${BASE_URL}/${id}`)
    
 
    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe(movie.name)
    expect(res.body).toBeDefined()
})

test("PUT => BASE_URL/:id should return res.statusCode(200), res.body.name === newObject.name",async()=>{
    const newObjecto={
        name:'Aliens'
    }
    const res = await request(app)
    .put(`${BASE_URL}/${id}`)
    .send(newObjecto)
 
    
    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe(newObjecto.name)
    expect(res.body).toBeDefined()
})
////-> /movies/:id/actors
test("POST => BASE_URL/:id/actors should returns ",async()=>{
    const actor = {
        firstName:'Jairo',
        lastName: 'Rincon',
        nationality:'colombiano', 
        image: 'https://imagen.jpg',
        birthday:'1645-03-02'
    }
    const NewActores = await Actor.create(actor)
    
    const res = await request(app)
    .post(`${BASE_URL}/${id}/actors`)
    .send([NewActores.id])   
   
 
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
    expect(res.body[0].id).toBe(NewActores.id)
    expect(res.body[0]).toBeDefined()
    await NewActores.destroy()
})

test("POST => BASE_URL/:id/directors should returns, res.statusCode(200),res.body[0].id === NewDirectors.id ",async()=>{
    const director = {
        firstName: 'andres',
        lastName:'rincon',
        nationality:'colombiano',
        image: 'https://imagen1',
        birthday:'2034-02-03'
    };
    const NewDirectors = await Directors.create(director)
    const res = await request(app)
    .post(`${BASE_URL}/${id}/directors`)
    .send([NewDirectors.id])
   
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
    expect(res.body[0]).toBeDefined()
    expect(res.body[0].id).toBe(NewDirectors.id)
    await NewDirectors.destroy()
})

//POST /movies/:id/genres
test("POST => BASE_URL/:id/genres should returns,res.statusCode(200),res.body[0].id === NewGenres.id",async()=>{
    const genero={
        name:'action'
    }
    const NewGenres = await Genres.create(genero)
    const res = await request(app)
    .post(`${BASE_URL}/${id}/genres`)
    .send([NewGenres.id])

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
    expect(res.body[0].id).toBe(NewGenres.id)
    expect(res.body[0]).toBeDefined()
    await NewGenres.destroy()
})

test("DELETE => BASE_URL/:id should return res.statusCode(204)",async()=>{
    
    const res = await request(app)
    .delete(`${BASE_URL}/${id}`)

    expect(res.statusCode).toBe(204)
    
})
