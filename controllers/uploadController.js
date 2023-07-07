const uploadModel= require("../models/uploadfile");
const multer = require("multer")
let nameFile;
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./fileupload'); // thư mục để lưu file upload

    },
    filename: function (req,file, cb){
        cb(null,file.originalname); // đặt tên file upload là tên góc của file
    }
});
const upload=multer({storage:storage});
const uploadController = {
    addfile : async(req,res)=>{
        try{
           console.log(req.body)
             upload.single('URL')(req,res, async function (err)
           {
            if(err)
            {
                console.error(err);
                res.status(500).json({ message: "Server error" });
            }else{
                const newUpload = new uploadModel ({
                 
                    title:req.body.title,
                    des:req.body.des,
                    subclass:req.body.subclass,
                    URL: req.file ? req.file.filename : null,
                    type: req.body.type,
                    creater_id: req.body.creater_id
                });
                    console.log(req.file.filename)
                    await newUpload.save();
                    res.status(201).json({
                        message:"User created successfully",
                        newUpload
                    });
            }
           })
        }catch(err){
            res.status(500).json({message:"Server error"});
        }
    },
    getFile : async(req,res)=>{
        try{
            const idClass= req.params.subclass;
            const files= await uploadModel.find({subclass: idClass});
            res.status(201).json(files);
        }
        catch(err){
            res.status(500).json({message:"Server error"});
        }
    },
    download : async(req,res)=>{
        try{
            const filePath = './fileupload/'+req.params.nameFile; // Đường dẫn đến file trên máy chủ
      
            res.download(filePath);
           
        }
        catch(err){
            res.status(500).json({message:"Server error"});
        }
    }
   

} 
module.exports= uploadController;