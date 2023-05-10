const { response } = require("express");
const  mongoose  = require("mongoose");



const abcController = {
    getAll : async (req,res)=>{
        try{
            console.log(req.params.modelName);
            const myModel = require("../models/"+req.params.modelName);
          
           
            const a= await myModel.find();
            res.status(201).json(a);
        }catch(err){
            res.status(500).json("Server not found");
        }
            
    },
    update : async (req,res)=>{
        try{
            const myModel = require("../models/"+req.params.modelName);
            const id= req.params.id;
            const model= await myModel.findById(id);
            if(!model){
                return res.status(404).json("not found")
            }
            Object.assign(model,req.body);
            await model.save();
            res.status(201).json(model);
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    delete : async (req,res)=>{
        try{
            const myModel = require("../models/"+req.params.modelName);
            const id= req.params.id;
            
            await myModel.findByIdAndDelete(id);
            res.status(201).json("Delete success");

        }catch(err){
            res.status(500).json("Server not found");
        }

    }, 
    getID : async (req,res)=>{
        try{
            const myModel = require("../models/"+req.params.modelName);
            const id= req.params.id;
            const model= await myModel.findById(id);
            if(!model){
                return res.status(404).json("not found")
            }
            res.status(201).json(model);
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getInfoByIDStudent : async (req,res)=>{
        try{
            const myModel = require("../models/"+req.params.modelName);
            const id= req.params.id;
            console.log(id)
            const obj= await myModel.find({student_id:id}).populate("student_id","name id department_id");
            console.log(obj);
            res.status(201).json(obj);
            
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
   
  
};

module.exports = abcController;
