const coreModel = require("../models/core");
const subjectModel=require("../models/subject")
const createCore = async()=>{

}

const coreController = {
    addCore : async (req,res)=>{
        try{
           
            const core= new coreModel({
                student_id:req.body.student_id,
                subject_id:req.body.subject_id,
                subject_class:req.body.subject_class,
                process:req.body.process,
                practice:req.body.practice,
                midterm:req.body.midterm,
                endterm:req.body.endterm,
                status:req.body.status,
            });
            console.log("1")
            console.log(core.process);
            console.log(core);
            await core.save();
            res.status(201).json(core);
        }catch (err){
            res.status(500).json("Server not found");
        }
    },
    update : async (req,res)=>{
        try{
           console.log("112")
            const id= req.params.id;
            const model= await coreModel.findOne({student_id:id});
            if(!model){
                return res.status(404).json("not found")
            }
            Object.assign(model,req.body);
            await model.save();
            res.status(201).json(model);
        }catch(err){
            res.status(500).json("Server not found");
        }
    }
  
};

module.exports = coreController;
