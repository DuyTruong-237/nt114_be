const { json } = require("express");
const lecturerModel = require("../models/lecturers");
const userModel = require("../models/user");
const {v4:uuidv4}=require("uuid");
const bcrypt = require("bcrypt");

const student = require("../models/student");
const createUser = async(uName,id)=>
{
    let password= id+"123";
    console.log(password)
    password= await bcrypt.hash(password, 10);
    const newUser= new userModel({idUser:id,userName: uName, password:password,position:'lecturer'});
    return await newUser.save();
}
const createLecturer = async(uName,
    idUser,
    depart_id,
    CI,
    dob,
    start_date,
    sex,
    address,
    email,
    specialize,
    phoneNum,
    position,)=>
{
    const newLecturer= new lecturerModel({id:idUser,
        idUser:idUser,
        name:uName,
        department_id:depart_id,
        CI:CI,
        dob:dob,
        start_date:start_date,
        sex:sex,
        address:address,
        email:email,
        specialize:specialize,
        phoneNum:phoneNum,
        position:position,
    });
    return await newLecturer.save();
}
const lecturerController = {
    addLecture : async(req,res)=>{
        try{
            let user;
            if(req.body.idUser)
            {
               
                user= await userModel.findOne({idUser: req.body.idUser});
                if(!user)
                {
                    return res.status(404).json({error:"User not found"});

                }

            }
            else{
                
                const idUser= "USER"+uuidv4().substr(0,6).toString();
                
                user= await createUser(req.body.name,idUser);

            }
            const newLecturer=await createLecturer(
                req.body.name,
                user.idUser,
                req.body.department_id,
                req.body.CI,
                req.body.dob,
                req.body.start_date,
                req.body.sex,
                req.body.address,
                req.body.email,
                req.body.specialize,
                req.body.phoneNum,
                req.body.position);
            res.status(201).json(newLecturer);
        }catch(err){
            res.status(500).json({error:"Server not found"});
        }
    },
    getAllLecturer : async(req,res)=>{
        try{
            const allLecturer= await lecturerModel.find().populate("department_id","name");
             res.status(201).json(allLecturer);
        }catch(err){
             res.status(500).json({error:"Server not found"})
        }
    },
    getLecturer : async(req,res)=>{
        try{
            let lecturer;
           
            lecturer= await lecturerModel.findById(req.params.id);
            
            res.status(201).json(lecturer);
        }catch(err)
        {
            res.status(500).json({error:"Server not sound"})
        }
    },
    getLecturerID : async(req,res)=>{
        try{
            let lecturer;
           if(req.params.id)
           {
            lecturer= await lecturerModel.findOne({idUser: req.params.id});
           }
          else if(req.body.id)
           {
            lecturer =await lecturerModel.findOne({id: req.body.id});
           }
            res.status(201).json(lecturer);
        }catch(err)
        {
            res.status(500).json({error:"Server not sound"})
        }
    },
    updateLecturer : async(req,res)=>{
        try{
            const id= req.params.id;
            const lecturer= await lecturerModel.findById(id);
            if(!lecturer)
            {
                return res.status(404).json("Lecturer not found")
            }
            const updatelecturer= req.body;
            Object.assign(lecturer,updatelecturer);
            await lecturer.save();
            res.status(201).json(lecturer);
        }catch{
            res.status(500).json("server not found");
        }
    },
    deleteLecturer : async(req,res)=>{
        try{
            const id= req.params.id;
            const lecturer= await lecturerModel.findById(id);
            if(!lecturer)
            {
                return res.status(404).json("Lecturer not found");
            }
            await lecturer.deleteOne();
            await userModel.findOneAndDelete({idUser:lecturer.idUser});
            res.status(201).json("Delete success")
        }
        catch(err)
        {
            res.status(500).json("Server not found");
        }
    },
    getLecturerIDdepart : async(req,res)=>{
        try{
            let lecturer;
           if(req.params.id)
           {
            lecturer= await lecturerModel.find({department_id: req.params.id});
           }
          
            res.status(201).json(lecturer);
        }catch(err)
        {
            res.status(500).json({error:"Server not sound"})
        }
    }

};

module.exports = lecturerController;
