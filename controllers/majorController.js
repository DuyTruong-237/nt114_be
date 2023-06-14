const MajorModel = require("../models/major");

const createMajor = async (departID, name, cun,des)=>
{
    const newAcc =  new MajorModel({department_id:departID,  name:name, CUN:cun,des:des})
    return await newAcc.save()
}
const MajorController = {
    addMajor : async (req,res)=>{
        try{
            const newAcc= await createMajor(req.body.department_id, req.body.name, req.body.CUN,req.body.des);
        res.status(201).json(newAcc);
        }catch(err)
        {
            res.status(500).json("Server not found")
        }
        
    },
    deleteMajor : async (req,res)=>{
        try{
            const id=req.params.id;
            const Major= await MajorModel.findById(id);
            if(!Major)
            {
              return  res.status(404).json("Major not found");
            }
            Major.deleteOne();
            res.status(201).json("Delete success")
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    updateMajor : async(req,res)=>{
        try{
            id= req.params.id;
            const update = await MajorModel.findById(id);
            if(!id)
            {
                return res.status.json("Major not found");
            }
            Object.assign(update,req.body);
            await update.save();
            res.status(201).json(update);
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getAllMajor : async (req,res) =>{
        try{
            const Major= await MajorModel.find();
            res.status(201).json(Major);
        }catch{
            res.status(500).json("Server not found");
        }
    },
    getMajor : async (req,res) => {
        try{
            const id= req.params.id
            const Major= await MajorModel.findById(id);
            res.status(500).json(Major);
        }catch(err){
            res.status(500).json("server not found");
        }
    }
  
};

module.exports = MajorController;
