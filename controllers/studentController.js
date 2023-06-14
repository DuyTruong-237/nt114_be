
const studentModel = require("../models/student")
const userModel=require("../models/user")


const {v4: uuidv4} = require('uuid');
const mongoose = require('mongoose');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./uploads'); // thư mục để lưu file upload

    },
    filename: function (req,file, cb){
        cb(null,file.originalname); // đặt tên file upload là tên góc của file
    }
});
 const upload=multer({storage:storage});

const createUser = async (uName,id, avatar)=> {
    
    const password= uuidv4().substr(0,8).toString();
    const newUser= new userModel({idUser:id,userName:uName, password:password,position:"student",avatar:avatar});
 
    return await newUser.save();
}
const createStudent = async (uName, idUser, depart_id,acclass_id)=> {
    const newStudent=new studentModel({id:"STD"+uuidv4().substr(0,6).toString(),idUser:idUser,name:uName, department_id:depart_id,acclass_id:acclass_id})
    return await newStudent.save();
}
const studentController = {
   
  addStudent  : async(req,res)=>{
    try{
      let user;
      upload.single('avatar')(req,res, async function(err){
        console.log("1")
        if(err){
          console.error(err);
          res.status(500).json({ message: "Server2 error" });
        }else{
            if(req.body.idUser)
          {
         user  =await userModel.findOne({idUser: req.body.idUser});
         if(!user){
            return res.status(404).json({error:"User not found"});
        }
       }else{
       
         const idUser="USER"+uuidv4().substr(0,6).toString();
         user= await createUser(req.body.name,idUser,req.file ? req.file.filename : null);
         console.log("05")
          }
          console.log("00")
          console.log(user.idUser)
          const student= await createStudent(req.body.name,user.idUser,req.body.department_id,req.body.acclass_id);
          res.status(201).json(student);
        }
      })
        
       
       
       
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
       
        
    }catch(err){
       
        res.status(500).json({ error: 'Server error' });
    }
  },
  getAllStudent : async(req,res)=>{
    try{
      const student = await studentModel.find().populate("department_id","name").populate("acclass_id","name");
      res.status(201).json(student);
    }catch{
      res.status(500).json({error:"Server not found"});
    }
  },
  getStudent : async(req,res)=>{
    try{
      const student = await studentModel.findById(req.params.id).populate("department_id","name").populate("acclass_id","name");;
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
