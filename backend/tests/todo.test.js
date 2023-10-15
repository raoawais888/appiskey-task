
const request = require('supertest');
const app = require('../server');
const Task = require('../models/taskModel');
const connection = require("../db/connection.js")



// Define a test task
const testTask = {
  title: `task - ${Date.now()} ` ,
  description: 'This is a test task.'
};


beforeAll(async () => {
 
    connection();

});




describe('API Endpoints', () => {
  it('should create a new task', async () => {
    const response = await request(app).post('/api/add-task').send(testTask);
    expect(response.status).toBe(200);
  } , 30000);

  it('title and decription  empty ', async () => {
    const response = await request(app).post('/api/add-task').send(testTask);
    expect(response.status).toBe(400);
  } , 40000);
  it('Server error if add task ', async () => {
    const response = await request(app).post('/api/add-task').send(testTask);
    expect(response.status).toBe(500);
  } , 50000);

  it('server error getting list', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(500);
  } , 50000);

  it('get all  tasks list', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
  },60000);


  it('should get a specific task by ID', async () => {
    const createdTask = await Task.create(testTask);
    const response = await request(app).get(`/api/edit-task/${createdTask._id}`);
    expect(response.status).toBe(200);
  } , 70000);



  it('should update a task', async () => {
    const createdTask = await Task.create(testTask);
    const updatedTask = { title: 'Updated Task' };
    const response = await request(app).put(`api/update-task/${createdTask._id}`).send(updatedTask);
    expect(response.status).toBe(200);
    
  },80000);

  it('should delete a task', async () => {
    const createdTask = await Task.create(testTask);
    const response = await request(app).delete(`/api/delete-task/${createdTask._id}`);
    expect(response.status).toBe(200);
  },90000);




});
