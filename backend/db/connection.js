
const mongoose = require("mongoose");
const colors = require("colors");
const connection = async (res) =>{
    try {
        
         await mongoose.connect("mongodb+srv://raoawais888:RCy262%40f@test.17stik6.mongodb.net/?retryWrites=true&w=majority");
        
    


    } catch (error) {
         console.log(error);
    }
}

module.exports = connection;