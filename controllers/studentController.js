
const studentModel = require("../models/student")
const userModel=require("../models/user")
const {v4: uuidv4} = require('uuid');
const mongoose = require('mongoose');
const createUser = async (uName,id)=> {

    const password= uuidv4().substr(0,8).toString();
    const newUser= new userModel({idUser:id,userName:uName, password:password,position:"student"});
 
    return await newUser.save();
}
const createStudent = async (uName, idUser)=> {
    const newStudent=new studentModel({id:"STD"+uuidv4().substr(0,6).toString(),idUser:idUser,name:uName})
    return await newStudent.save();
}
const studentController = {
   
  addStudent  : async(req,res)=>{
    try{
        console.log("00")
       let user;
       if(req.body.idUser)
       {
        console.log("01")
        user  =await userModel.findOne({idUser: req.body.idUser});
        if(!user){
            return res.status(404).json({error:"User not found"});
        }
       }else{
        console.log("02")
         const idUser="USER"+uuidv4().substr(0,6).toString();
         user= await createUser(req.body.name,idUser);
         console.log("05")
       }
       console.log("00")
       const student= await createStudent(req.body.name,user.idUser);

        // let user;
        // console.log("1");
        // if(req.body.idUser){
        //     console.log("5");
        //     user=await userModel.findOne({idUser: req.body.idUser});
        //     console.log("2");
        //     if(!user){
        //         return res.status(404).json({error:'User not found'});
        //     }
        // }
        // else{
        //     console.log("kkkk");
        //     const newUser=new userModel({idUser:"USER"+ uuidv4().substr(0,6).toString(),userName:req.body.name, password:uuidv4().substr(0,8).toString(), position:'student'})
        //     user=await newUser.save();
        // }
        // console.log("3");
        // const newStudent =new studentModel({id:"STD"+ uuidv4().substr(0,6).toString(),idUser:user.idUser,name:req.body.name})
        // console.log(req.body.name+user.idUser);
        // const student = await newStudent.save();
       
        res.status(201).json(student);
    }catch(err){
       
        res.status(500).json({ error: 'Server error' });
    }
  },
  getAllStudent : async(req,res)=>{
    try{
      const student = await studentModel.find();
      res.status(201).json(student);
    }catch{
      res.status(500).json({error:"Server not found"});
    }
  },
  getStudent : async(req,res)=>{
    try{
      const student = await studentModel.findById(req.params.id);
      res.status(201).json(student);
    }catch{
      res.status(500).json({error:"Server not found"});
    }
  }
  ,
  getStudentID : async(req,res)=>{
    try{
      let student;
      if(req.body.idUser)
      {
        student= await studentModel.findOne({idUser: req.body.idUser});
      }
      else if(req.body.id)
      {
        student = await studentModel.findOne({id: req.body.id});
      }
      res.status(201).json(student);
    }
    catch(err){
      res.status(500).json("Server not found")

    }
  }
  ,
  updateStudent : async(req,res)=>{
        try{
         
          const id= req.params.id;
         
          const student= await studentModel.findById(id);
         
          if(!student)
          {
            return res.status(404).json({error:"Student not found"});

          }
          const updateStudent=req.body;
           Object.assign(student, updateStudent);
          
            await student.save();
          res.status(201).json(student);
        }catch(err){
          res.status(500).json({error: 'Server not found'});
        }
       
  },
  deleteStudent : async(req,res)=>{
    try{
      const id= req.params.id;
      const student= studentModel.findById(id);
      if(!student)
      {
        return res.status(404).json({error: 'Server not found'});
      }
      await student.deleteOne();
      await userModel.findOneAndDelete({idUser:student.idUser});
      res.status(201).json("Delete success");
      
    }catch(err){
      res.status(500).json({error:"Server not found"});
    }
  }
  
};

module.exports = studentController;
