const userModel = require("../models/user");
const {v4: uuidv4} = require('uuid');

const userController = {
    addUser : async (req, res)=>{
        try{
           

            const newUser = new userModel ({
            idUser:"USER"+ uuidv4().substr(0,6).toString(),
            userName:req.body.userName,
            password:req.body.password,
            position:req.body.position})
            await newUser.save();
            res.status(201).json({
                message:"User created successfully",
                newUser
            });
        }catch(err){
            console.error;
            res.status(500).json({message:"Server error"});
        }
    }
    
  
};

module.exports = userController;
