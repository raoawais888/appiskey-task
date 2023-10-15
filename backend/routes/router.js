// All end-points  routes Define in this file 
const express = require("express");
const router = express.Router();

//   import alll Controller Here .........
const taskController = require("../controllers/taskController.js");

 

//  All list routes define here ............
router.get("/tasks",taskController.tasks);
router.post("/add-task",taskController.create);
router.get("/edit-task/:id",taskController.edit);
router.put("/update-task/:id",taskController.update);
router.get("/delete-task/:id",taskController.delete);



module.exports = router