const app = require('../app')
const reques = require('supertest')


const genero={
    name:'action'
}

const BASE_URL='/api/v1/genres';
let id;

test("POST => BASE_URL should return res.statusCode(201), res.body.name === genero.name",async()=>{

    const res =await reques(app)
    .post(BASE_URL)
    .send(genero)

    id= res.body.id;

    expect(res.statusCode).toBe(201)
    expect(res.body.name).toBe(genero.name)
})

test("Get => BASE_URL should resturn res.statusCode(200), res.body.length===1, res.body[0].name == genero.name",async()=>{
    const res = await reques(app)
    .get(BASE_URL)

    expect(res.statusCode).toBe(200)
    expect(res.body[0].name).toBe(genero.name)
    expect(res.body).toHaveLength(1)
})

test("Get => BASE_URL/:id should resturn res.statusCode(200), res.body.name == genero.name",async()=>{
    const res = await reques(app)
    .get(`${BASE_URL}/${id}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe(genero.name)
    expect(res.body).toBeDefined()
})
test("PUT => BASE_URL/:id should resturn res.statusCode(200), res.body.name=== newObject.name",async()=>{
    const newObject={
        name:"Terror"
    }
    const res =await reques(app)
    .put(`${BASE_URL}/${id}`)
    .send(newObject)



 expect(res.statusCode).toBe(200)
 expect(res.body.name).toBe(newObject.name)
 
})

test("DELETE => BASE_URL/:id/genres should return res.statusCode(204)",async()=>{
    
    const res = await reques(app)
    .delete(`${BASE_URL}/${id}`)

    expect(res.statusCode).toBe(204)  
})