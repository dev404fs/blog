const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')


test('request blogs via GET route', async () => {
   const response =  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    expect(response.body).toHaveLength(2)
})

afterAll(async () => {
    await mongoose.connection.close()
  })


