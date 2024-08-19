const app = require('../app')
const request= require('supertest')


const BASE_URL='/api/v1/actors'

const actor = {
    firstName:'Jairo',
    lastName: 'Rincon',
    nationality:'colombiano', 
    image: 'https://imagen.jpg',
    birthday:'1645-03-02'
}
let id;
test("POST => BASE_URL, should return, res.body.firstName === actor.firsName ",async()=>{

    const res= await request(app)
    .post(BASE_URL)
    .send(actor)
    
 id = res.body.id

    expect(res.statusCode).toBe(200)
    expect(res.body.firstName).toBe(actor.firstName)
    expect(res.body).toBeDefined()
})

test("Get => BASE_URL, Should return, res.body.length === 1 and res.body[0].firstName === actor.firstName",async()=>{
    const res = await request(app)
    .get(BASE_URL)



  expect(res.statusCode).toBe(200)
  expect(res.body).toHaveLength(1)
  expect(res.body).toBeDefined()

})

test("Get => BASE_URL/:id/actors, should return res.statusCode(200), res.body.firstName === actor.firstName  and res.body.id === id",async()=>{

    const res = await request(app)
    .get(`${BASE_URL}/${id}`)


    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.id).toBe(id)
    expect(res.body.firstName).toBe(actor.firstName)

})

test("PUT => BASE_URL/:id/actors should return, res.statusCode(200), newObjet.firstName === res.body.firstNme",async()=>{
    
    const newObject={
        firstName:'jhosua'
    }
    const res = await request(app)
    .put(`${BASE_URL}/${id}`)
    .send(newObject)

    expect(res.statusCode).toBe(200)
    expect(res.body.firstName).toBe(newObject.firstName)
    expect(res.body).toBeDefined()
})


test("DELETE => BASE_URL/:id/actors should return res.statusCode(204)",async()=>{
    const res = await request(app)
    .delete(`${BASE_URL}/${id}`)

    expect(res.statusCode).toBe(204)
})