const { json } = require("express");
const lecturerModel = require("../models/lecturers");
const userModel = require("../models/user");
const {v4:uuidv4}=require("uuid");
const student = require("../models/student");
const createUser = async(uName,id)=>
{
    const password= uuidv4().substr(0,8).toString();
    console.log(id);
    const newUser= new userModel({idUser:id,userName: uName, password:password,position:'lecturer'});
    return await newUser.save();
}
const createLecturer = async(uName,idUser,depart_id)=>
{
    const newLecturer= new lecturerModel({id:"LEC"+uuidv4().substr(0,6).toString(),idUser:idUser, name:uName, department_id:depart_id});
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
            const newLecturer=await createLecturer(req.body.name,user.idUser,req.body.department_id);
            res.status(201).json(newLecturer);
        }catch(err){
            res.status(500).json({error:"Server not found"});
        }
    },
    getAllLecturer : async(req,res)=>{
        try{
            const allLecturer= await lecturerModel.find();
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
           if(req.body.idUser)
           {
            lecturer= await lecturerModel.findOne({idUser: req.body.idUser});
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
    }

};

module.exports = lecturerController;
