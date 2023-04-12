const subjectModel = require("../models/subject");
const {v4: uuidv4} = require('uuid');
const createSubject = async (departmentId,name, desText,coProcess,coPractice,coMidterm,coEndterm,cre)=>{
    const id= uuidv4().substr(0,8).toString();
    const newSubject= new subjectModel({
        subject_id:id,
        departmentId:departmentId,
        name:name,
        desText:desText,
        coProcess:coProcess,
        coPractice:coPractice,
        coMidterm:coMidterm,
        coEndterm:coEndterm,
        cre:cre
    })
    return await newSubject.save();
}
const subjectController = {
    addSubject : async (req,res) =>{
        try{
            const subject = await createSubject(
                req.body.departmentId,
                req.body.name,
                req.body.desText,
                req.body.coProcess,
                req.body.coPractice,
                req.body.coMidterm,
                req.body.coEndterm,
                req.body.cre);
            res.status(201).json(subject);
        }catch(err){
            res.status(201).json("Server not found");
        }
    },
    updateSubject : async (req,res) => {
        try{
            const subject= await subjectModel.findById(req.params.id);
            if(!subject)
            {
                return res.status(404).json("Subject not found")
            }
            Object.assign(subject,req.body)
            await subject.save();
            res.status(201).json(subject);
        }catch(err){
            res.status(500).json("Server not found")
        }
    },
    deleteSubject : async (req,res)=>{
        try{
            const id= req.params.id;
            const subject= await subjectModel.findById(id);
            if(!subject)
            {
                return res.status(404).json("Subject not found");
            }
            subject.deleteOne();
            res.status(201).json("Delete success")
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getSubject : async (req,res)=>{
        try{
            const id= req.params.id;
            const subject= await subjectModel.findById(id);
            if(!subject)
        {
            return res.status(404).json("Subject not found")
        }
            res.status(201).json(subject);
        }catch(err){
            res.status(500).json("Server not found")
        }
        
    },
    getAllSubject : async (req,res)=>{
        try{
            const subject= await subjectModel.find();
            res.status(200).json(subject);
        }catch(err){
            res.status(500).json("Server not found");
        }
    }
  
};

module.exports = subjectController;
