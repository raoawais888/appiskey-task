const taskModel = require("../models/taskModel.js")
class taskController{
 
    // create list function ...................
    static create= async (req,res)=>{
        try {
            
            // destructure data from body
         const {title , description} = req.body;
            
       
         const status = req.body.status ? req.body.status : 0 
         

        //  check on data //...........................

         if(!title){
            res.status(400).send({
                success:false,
                message:"Title Field is required"
            });
         }

         if(!description){
            res.status(400).send({
                success:false,
                message:"Description Field is required"
            });
         }
        

        //  title check title is unique or not ///...................
        const titleCheck = await taskModel.findOne({title});
       
           if(!titleCheck){
                   
                const listDoc = new taskModel({
              
                    title:title,
                    description:description,
                    status:status
                })

            const task =  await listDoc.save();

            res.status(200).send({
                success:true,
                message:"Task Added",
                task:task
            });

           }else{
            res.status(400).send({
                success:false,
                message:"Title  Field Already Exist"
            });
           }






         
        } catch (error) {
             res.status(500).json({
                success:false,
                message:"Something wrong from server side",
                error:error
             })
        }
    }



     // read all  list function ...................
     static tasks  = async (req,res)=>{
        try {
             
      const tasks = await taskModel.find();
      res.status(200).send({
        success:true,
        message:"All Tasks",
        tasks:tasks
    });

        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Something wrong from server side",
                error:error
             })
        }
    }

    
     // edit list function ...................
    
     static edit  = async (req,res)=>{
        try {
            const id = req.params.id;
            const task = await taskModel.findOne({_id:id});
        
                res.status(200).send({
                    success:true,
                    message:"Single List ",
                    task:task
                });
        
            
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Something wrong from server side",
                error:error
             })
        }
    }



     // Update list function ...................
     static update  = async (req,res)=>{
        try {

            const {title , description, status} = req.body;
               const id = req.params.id;
               
               
               const updateTask = await taskModel.findByIdAndUpdate(id,{
                title,
                description,
                status
               },{ new: true })
              
               res.status(200).send({
                success:true,
                message:"Update List ",
                updatetask:updateTask
            });
          
            
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Something wrong from server side",
                error:error
             })
        }
    }


     // Update list function ...................
     static delete  = async (req,res)=>{
        try {

            const id = req.params.id;
             await taskModel.findByIdAndDelete(id);
              
             res.status(200).send({
                success:true,
                message:"Task Deleted",
                
            });
            
            
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Something wrong from server side",
                error:error
             })
        }
     }




}

module.exports = taskController;