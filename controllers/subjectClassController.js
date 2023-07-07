const subjectClassModel = require("../models/subjectclass");
const abc=require("./abcController");
const {v4: uuidv4} = require('uuid');
const createSubClass = async (subject_id,subname, lecturer_id, term, yearSchool, startDate,endDate,status,classDay,lecssion)=>{
    const id= uuidv4().substr(0,6).toString();
    const newSubclass= new subjectClassModel({
        subclass_id:id,
        subject_id:subject_id,
         subname:subname,
          lecturer_id:lecturer_id,
          term:term,
          yearSchool:yearSchool,
          startDate:startDate,
          endDate:endDate,
          status:status,
          classDay:classDay,
          lecssion:lecssion});
          return await newSubclass.save();
}
const subjectClassController = {
    addSubClass : async(req,res)=>{
        try{
            
            const newSubclass= await createSubClass(
                req.body.subject_id,
                req.body.subname,
                req.body.lecturer_id,
                req.body.term,
                req.body.yearSchool,
                req.body.startDate,
                req.body.endDate,
                req.body.status,
                req.body.classDay,
                req.body.lecssion)
                res.status(201).json(newSubclass);
        }catch(err){
        res.status(500).json("Server not found")
        }
    },
    deleteSubClass : async(req,res)=>{
        try{
            const id= req.params.id;
            if(!id){
                if(req.body.subclass_id)
                {
                   await subjectClassModel.findOneAndDelete({subclass_id:req.body});
                   return  res.status(202).json("delete success");
                }
            }
            await subjectClassModel.findByIdAndDelete(id);
            return  res.status(202).json("delete success");

        }catch(err)
        {
            res.status(500).json("Server not found");
        }
    },
    updateSubClass : async(req,res)=>{
        try{
            const id= req.params.id;
            
            const SubClass= await subjectClassModel.findById(id);
            
            if(!SubClass){
                return res.status(404).json("SubClass not found")
            }
            Object.assign(SubClass,req.body);
           await SubClass.save();
           res.status(201).json(SubClass);

        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getAllSubClass : async(req,res)=>{
        try{
            const allSubClass= await subjectClassModel.find();
            res.status(201).json(allSubClass);
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getSubClass : async(req,res)=>{
        try{
            const subclass= await subjectClassModel.findById(req.params.id);
            res.status(201).json(subclass);
        }catch(err){

        }
    },
    getSubClassLec : async(req,res)=>{
        try{
            const subclass= await subjectClassModel.find({lecturer_id : req.params.id}).populate("lecturer_id","name id department_id");
            res.status(201).json(subclass);
        }catch(err){

        }
    }
   
  
};

module.exports = subjectClassController;
