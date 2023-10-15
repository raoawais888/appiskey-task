
const request = require('supertest');
const app = require('../server');
const Task = require('../models/taskModel');
const connection = require("../db/connection.js")
const mongoose = require("mongoose");



// Define a test task
const testTask = {
  _id:new mongoose.Types.ObjectId().toString(),
  title: `task - ${Date.now()} ` ,
  description: 'This is a test task.',
  status:0
};

// empty task send 

// Define a test task
const task = {
  
  title: "",
  description:"",

};


beforeAll(async () => {
 
    connection();

});



describe("Task List", () => {
 
  describe("get tasks route", () => {



    // describe("title and decription  empty", () => {

      
    //   it("should return a 400", async () => {   
      
    //     const response = await request(app).post('/api/add-task').send(task);
    //     expect(response.status).toBe(400);
    //   },30000);
    // });


    

    describe("should create a new task", () => {
      it("should return a 200", async () => {
        const response = await request(app).post('/api/add-task').send(testTask);
        expect(response.status).toBe(200);
      },40000);
    });



    describe("get all  tasks list", () => {
      it('Should return 200', async () => {
        const response = await request(app).get('/api/tasks');
        expect(response.status).toBe(200);
      },60000);
  
    });


   

    describe("should get a specific task by ID", () => {
      it('Should return 200', async () => {
        const editTask = {
          _id:new mongoose.Types.ObjectId().toString(),
          title: `task - ${Date.now()} ` ,
          description: 'This is a test task.',
          status:0
        };
        
        const createdTask = await Task.create(editTask);
      const response = await request(app).get(`/api/edit-task/${createdTask._id}`);
      expect(response.status).toBe(200);
      },70000);
  
    });

  
  

    describe("should update specific task by ID", () => {
      it('Should return 200', async () => {
         const  updateTask = {
          _id:  new mongoose.Types.ObjectId().toString(),
          title: `task - ${Date.now()} ` ,
          description: 'This is a test task.',
          status:0
        };
          const createdTask = await Task.create(updateTask);
      const updatedTask = { title: 'Updated Task' };
      const response = await request(app).put(`/api/update-task/${createdTask._id}`).send(updatedTask);
      expect(response.status).toBe(200);
      },80000);
  
    });


  
  
    describe("should Deleted task by ID", () => {
     it('should return 200', async () => {
      const deleteTask = {
        _id:new mongoose.Types.ObjectId().toString(),
        title: `task - ${Date.now()} ` ,
        description: 'This is a test task.',
        status:0
      };
      const createdTask = await Task.create(deleteTask);
      const response = await request(app).delete(`/api/delete-task/${createdTask._id}`);
      expect(response.status).toBe(200);
    },90000);

    });

  
  
  


  });
});

