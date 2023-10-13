
const mongoose = require("mongoose");
const colors = require("colors");
const connection = async (res) =>{
    try {
        
        const DB_URL = process.env.DB_URL

        const OPTION = {
            dbName: process.env.DB_NAME 
        }

         await mongoose.connect(DB_URL , OPTION);
         console.log("db connected" .bgCyan)
    


    } catch (error) {
         console.log(error);
    }
}

module.exports = connection;