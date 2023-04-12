const acclassModel = require("../models/acclass");

const createClass = async (departID, lecID, name)=>
{
    const newAcc =  new acclassModel({department_id:departID, lecturer_id:lecID, name:name})
    return await newAcc.save()
}
const acclassController = {
    addAcClass : async (req,res)=>{
        try{
            const newAcc= await createClass(req.body.department_id,req.body.lecturer_id, req.body.name);
        res.status(201).json(newAcc);
        }catch(err)
        {
            res.status(500).json("Server not found")
        }
        
    },
    deleteAcClass : async (req,res)=>{
        try{
            const id=req.params.id;
            const acclass= await acclassModel.findById(id);
            if(!acclass)
            {
              return  res.status(404).json("Class not found");
            }
            acclass.deleteOne();
            res.status(201).json("Delete success")
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    updateAcclass : async(req,res)=>{
        try{
            id= req.params.id;
            const update = await acclassModel.findById(id);
            if(!id)
            {
                return res.status.json("Class not found");
            }
            Object.assign(update,req.body);
            await update.save();
            res.status(201).json(update);
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getAllClass : async (req,res) =>{
        try{
            const acclass= await acclassModel.find();
            res.status(201).json(acclass);
        }catch{
            res.status(500).json("Server not found");
        }
    },
    getClass : async (req,res) => {
        try{
            const id= req.params.id
            const acclass= await acclassModel.findById(id);
            res.status(500).json(acclass);
        }catch(err){
            res.status(500).json("server not found");
        }
    }
  
};

module.exports = acclassController;
