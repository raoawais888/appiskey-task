// All end-points  routes Define in this file 
const express = require("express");
const router = express.Router();

//   import alll Controller Here .........
const ListController = require("../controllers/listController.js");

 

//  All list routes define here ............
router.get("/lists",ListController.lists);
router.post("/add-list",ListController.create);
router.get("/edit-list/:id",ListController.edit);
router.put("/update-list/:id",ListController.update);
router.get("/delete-list/:id",ListController.delete);



module.exports = router