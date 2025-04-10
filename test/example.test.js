require('dotenv').config(); // Load environment variables from .env

const chai = require('chai'); // Import Chai assertion library
const expect = chai.expect;   // Extract the 'expect' style from Chai library

const request = require('supertest'); // Import Supertest for HTTP requests
const api = request(process.env.BASE_URL); // Create a Supertest agent for the base API URL from .env

describe('DummyJson Posts API', () => {
  it('[Positive] Get All Posts', async function(){
    const response = await api.get('/posts')
    expect(response.status).to.equal(200); // Check if status is 200 OK
    expect(response.body.posts).to.be.an('array'); // Check if response is an array
  });
  
  it('[Positive] Get Post by Id', async function() {
    const response = await api.get('/posts/1')
    expect(response.body).to.have.property('id', 1);
    expect(response.body.title).to.equal('His mother had always taught him');
    expect(response.body.body).to.contain("He'd tried to live by this motto.");
    expect(response.body).to.be.deep.contain({
        userId: 121,
        views: 305,
        reactions: {
            likes: 192,
            dislikes: 25
        },
        tags: ['history', 'american', 'crime']
      });
    expect(response.body.views).to.be.within(300, 350);  
    expect(response.body.tags).to.include('crime');
    expect(response.body.tags).to.have.lengthOf(3);
  });
  
  it('[Positive] Add Post', async function() {
    const response = await api.post('/posts/add')
    .set('Content-Type', 'application/json')
    .send({
      title: 'New Post',
      body: 'This is a new post.',
      userId: 5,
      views: 100,
      reactions: {
        likes: 10,
        dislikes: 2
      },
      tags: ['new', 'post']
    });
    expect(response.status).to.equal(201); 
    
  });
  it('[Positive] Update Post by Id', async function() {
    const response = await api.put('/posts/1')
    .set('Content-Type', 'application/json')
    .send({
      title: 'Updated Post',
      body: 'This is an updated post.',
      userId: 11111,
      views: 200,
      reactions: {
        likes: 20,
        dislikes: 5
      },
      tags: ['updated', 'post']
    });
    expect(response.status).to.equal(200); 
  });
  it('[Positive] Delete Post by Id', async function() {
    const response = await api.delete('/posts/1')
    expect(response.status).to.equal(200); 
    expect(response.body.isDeleted).to.be.true; // Check if the post was deleted successfully

  });
})