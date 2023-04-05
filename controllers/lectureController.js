const lecturerModel = require("../models/lecturers");
const userModel = require("../models/user");
const {v4:uuidv4}=require("uuid");
const createUser = async(uName,id)=>
{
    const password= uuidv4().substr(0,8).toString();
    const newUser= new lecturerModel({idUser:id,userName: uName, password:password,position:'lecturer'});
    return await newUser.save();
}
const createLecturer = async(uName,idUser)=>
{
    const newLecturer= new lecturerModel({id:"LEC"+uuidv4().substr(0,6).toString(),idUser:idUser, name:uName});
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
                user=createUser(req.body.name,idUser);

            }
            const newLecturer=createLecturer(req.body.name,user.idUser);
            return res.status(201).json(newLecturer);
        }catch(err){
            return res.status(500).json({error:"Server not found"});
        }
    }
  
};

module.exports = lecturerController;
