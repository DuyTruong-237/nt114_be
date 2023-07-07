const departmentModel = require("../models/department");
const createDepartment = async(name, des, dean,vDean)=>{
    const newDepartment= new departmentModel({name:name,des:des, dean:dean,vDean:vDean});
    return await newDepartment.save();
}
const departmentController = {
    addDepartment : async (req,res)=>{
        try{
            
            const depart= await createDepartment(req.body.name,req.body.des,req.body.dean,req.body.vDean)
            res.status(201).json(depart)
        }catch(err)
        {
            res.status(500).json("Server not found");
        }
    },
    updateDepartment : async (req,res)=>{
        try{
            const id = req.params.id;
            const updateDepartment= req.body;
            const depart= await departmentModel.findById(id);
            Object.assign(depart,updateDepartment);
            await depart.save();
            res.status(201).json("update success")

        }catch(err)
        {
            res.status(500).json("Server not found");
        }
    },
    deleteDepartment : async (req,res)=>{
        try{
            const id= req.params.id;
            await departmentModel.findByIdAndDelete(id);
            res.status(201).json("Delete success")
            
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getAllDepartment : async(req,res)=>{
        try{
            const AllDepartment= await departmentModel.find().populate("dean name","vdean name");
            res.status(201).json(AllDepartment);
        }catch(err)
        {
            res.status(500).json("Server not found")
        }
    },
    getDepartment : async(req,res)=>{
        try{
            const id= req.params.id;
            const depart= await departmentModel.findById(id);
            res. status(201).json(depart);
        }catch(err)
        {
            res.status(500).json("Server not found");
        }
    }
  
};

module.exports = departmentController;
