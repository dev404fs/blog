const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')
const listHelper = require('../utils/list_helper')


test('request blogs via GET route', async () => {
   const response =  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
    //expect(response.body).toHaveLength(2)
    expect(response.body[0].id).toBeDefined()
    expect(response.body[1].id).toBeDefined()
})

test('post blog via POST route', async () => {
  // Get length of blogs before
  let responseBefore = await api
  .get('/api/blogs')
  .expect(200)

  let responseBeforeLength = responseBefore.body.length

  await api
   .post('/api/blogs')
   .send({title: "abcd", author: "b", url:"c", likes:5})
   .expect(201)
  
   let responseAfter = await api
   .get('/api/blogs')
   .expect(200)

   let responseAfterLength = responseAfter.body.length

   expect(responseAfterLength).toBe(responseBeforeLength + 1)

})

test('Delete via DELETE', async () => {
  let responseBefore = await api
  .get('/api/blogs')
  .expect(200)

  let responseBeforeLength = responseBefore.body.length
  // Take first entry as id to delete
  const idToDelete = responseBefore.body[0].id

  await api
   .delete('/api/blogs/' + idToDelete)
   .expect(204)
  
   let responseAfter = await api
   .get('/api/blogs')
   .expect(200)

   let responseAfterLength = responseAfter.body.length

   expect(responseAfterLength).toBe(responseBeforeLength + -1)

})

test('Update blog using PUT', async () => {
  let responseBefore = await api
  .get('/api/blogs')
  .expect(200)

  // Take first entry as id to update
  const idToUpdate = responseBefore.body[0].id
  console.log(responseBefore.body[0].id)
  await api
   .put('/api/blogs/' + idToUpdate)
   .send({title: "IM UPDATED", author: "b", url:"c", likes:5})
  
   let responseAfter = await api
   .get('/api/blogs')
   .expect(200)

   console.log(responseAfter.body[0].id)
   expect(responseAfter.body[0].title).toBe("IM UPDATED")
})



afterAll(async () => {
    await mongoose.connection.close()
  })


