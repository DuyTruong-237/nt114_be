const sublecturerModel = require("../models/sublecturers");
const createSubLec = async (subid,lecid)=>{
    const newSubLec= new sublecturerModel({subject_id:subid, lecturer_id:lecid});
    return await newSubLec.save();
}
const sublecturerController = {
    addSubLec : async (req,res) =>{
        try{
            const newSubLec= await createSubLec(req.body.subject_id, req.body.lecturer_id);
            res.status(201).json(newSubLec);
        }catch(err){
            res.status(500).json("Server not found");
        }
           
       },
    deleteSubLec : async (req,res) =>{
        try{
            const id=req.params.id;
            await sublecturerModel.findByIdAndDelete(id);
            res.status(201).json("Delete success");
        }catch (err)
        {
            res.status(500).json("Server not found");
        }
    },
    getAllSubLec : async (req,res)=>{
        try{
            const allSubLec= await sublecturerModel.find();
            res.status(201).json(allSubLec);
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getSubLect : async (req,res)=>{
        try{
            const id=req.params.id;
            const SubLec= await sublecturerModel.findById(id);
            res.status(201).json(SubLec);

        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getSubLectID : async (req,res)=>{
        try{
            const id=req.params.id;
            const idrole=req.params.idRole;
            let SubLec
            if(idrole=="lecturer_id")
            {
                 SubLec= await sublecturerModel.find({lecturer_id:id}).populate("subject_id","name cre subject_id");
            }else{
                 SubLec= await sublecturerModel.find({subject_id:id}).populate("lecturer_id","name id department_id");
            }
            
            res.status(201).json(SubLec);

        }catch(err){
            res.status(500).json("Server not found");
        }
    }
    ,
    updateSubLec : async (req,res)=>{
        try{
            const id=req.params.id;
            const SubLec= await sublecturerModel.findById(id);
            if(!SubLec){
                return res.status(404).json("not found");
            }
            Object.assign(SubLec,req.body);
            await SubLec.save();
            res.status(201).json(SubLec);
        }catch(err){
            res.status(500).json("Server not found");
        }
    }
  
};

module.exports = sublecturerController;
