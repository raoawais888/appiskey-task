const listModel = require("../models/listModel.js")
class ListController{
 
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
        const titleCheck = await listModel.findOne({title});
        console.log(titleCheck)

           if(!titleCheck){
                   
                const listDoc = new listModel({
              
                    title:title,
                    description:description,
                    status:status
                })

            const list =  await listDoc.save();

            res.status(200).send({
                success:true,
                message:"List Added",
                list:list
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
     static lists  = async (req,res)=>{
        try {
             
      const lists = await listModel.find();
      res.status(200).send({
        success:true,
        message:"All List",
        lists:lists
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
            const list = await listModel.findOne({_id:id});
        
                res.status(200).send({
                    success:true,
                    message:"Single List ",
                    list:list
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
               
               
               const updateList = await listModel.findByIdAndUpdate(id,{
                title,
                description,
                status
               },{ new: true })
              
               res.status(200).send({
                success:true,
                message:"Update List ",
                updateList:updateList
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
             await listModel.findByIdAndDelete(id);
              
             res.status(200).send({
                success:true,
                message:"List Deleted",
                
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

module.exports = ListController;