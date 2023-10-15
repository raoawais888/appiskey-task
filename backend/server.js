// configure DOtenv file  ..............................
const env = require("dotenv");
env.config();

// import express ..............................
const express = require("express")
const app = express();


// PORT get from ENV file ..............................
const PORT = process.env.PORT || 3000

// DB conncect function get   ..............................
const connection = require("./db/connection.js")
 connection();


// cors midleware imprort ..............................
const cors = require("cors")


// Router  imprort ..............................
 const router = require("./routes/router.js") 


 //  Add middleware  ..............................
app.use(cors());
app.use(express.json());
app.use("/api",router);



// Server Run  ..............................
app.listen(PORT,()=>{

})

module.exports = app;