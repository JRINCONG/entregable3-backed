const app =require('../app')
const request = require('supertest');



const director = {
    firstName: 'andres',
    lastName:'rincon',
    nationality:'colombiano',
    image: 'https://imagen1',
    birthday:'2034-02-03'
};
let id;
const BASE_URL='/api/v1/directors';

test("POST => BASE_URL, should return, res.statusCode(201), res.body.firstName === director.firstName",async()=>{
const res = await request(app)
.post(BASE_URL)
.send(director)

id=res.body.id

expect(res.statusCode).toBe(201)
expect(res.body.firstName).toBe(director.firstName)
expect(res.body).toBeDefined()
})

test("GET => BASE_URL, should return res.statusCode(200), res.body.firstName === director.firstName and res.body.length === 1" ,async()=>{
    const res = await request(app)
    .get(BASE_URL)

   
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.length).toBe(1)
    expect(res.body[0].firstName).toBe(director.firstName)
})

test("GET => BASE_URL/:id, should resturn res.statusCode(200), res.body.nationality === director.nationality ",async()=>{
    const res= await request(app)
    .get(`${BASE_URL}/${id}`)

    
    expect(res.statusCode).toBe(200)
    expect(res.body.nationality).toBe(director.nationality)
    })

    test("PUT => BASE_URL/:id, should resturn res.statusCode(204), newObjeto.firsName === res.body.firstName",async()=>{
        const newObject={
            firstName:'jairo'
        }
        const res = await request(app)
        .put(`${BASE_URL}/${id}`)
        .send(newObject)

        expect(res.statusCode).toBe(200)
        expect(res.body.firstName).toBe(newObject.firstName)
        expect(res.body).toBeDefined()
    })

    test("DELETE => BASE_URL/:id/directors should return res.statusCode(204)",async()=>{
        const res = await request(app)
        .delete(`${BASE_URL}/${id}`)
 
        expect(res.statusCode).toBe(204)
    })