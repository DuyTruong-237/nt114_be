const userModel = require("../models/user");
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const user = require("../models/user");
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./uploads'); // thư mục để lưu file upload

    },
    filename: function (req,file, cb){
        cb(null,file.originalname); // đặt tên file upload là tên góc của file
    }
});
 const upload=multer({storage:storage});

const userController = {
    //upload : multer({storage:storage}),
    addUser : async (req, res)=>{
        try{
           upload.single('avatar')(req,res, async function (err)
           {
            if(err)
            {
                console.error(err);
                res.status(500).json({ message: "Server error" });
            }else{
                const newUser = new userModel ({
                    idUser:"USER"+ uuidv4().substr(0,6).toString(),
                    userName:req.body.userName,
                    password:req.body.password,
                    position:req.body.position,
                    avatar: req.file ? req.file.filename : null});
                    console.log(req.file.filename)
                    await newUser.save();
                    res.status(201).json({
                        message:"User created successfully",
                        newUser
                    });
            }
           })

           
        }catch(err){
            console.error;
            res.status(500).json({message:"Server error"});
        }
    },
    updateUser : (req,res)=>{
        const id= req.params.idUser;
        const user= userModel.findOne({idUser:id});
        const uploadFile=new Promise((resolve, reject)=>{
            upload.single('avatar')(req, res, (err)=>{
                if(err instanceof multer.MulterError){
                    reject('error uploading file');
                }else if(err){
                    reject('error uploading filr');
                }else{
                    resolve(req.file);
                }
            });
        });

        Promise.all([user, uploadFile])
        .then(([user, file])=>{
            if(!user){
                return res.status(404).json({message:'User not found'});
            }
            user.userName=req.body.userName||user.userName;
            user.password=req.body.password||user.password;
            user.position=req.body.position||user.position;
            if(file){
                user.avatar=file.filename;
            }
            console.log(user)
            return user.save();
           
        })
        .then((updateUser)=>{
            console.log("2")
            res.status(201).json({updateUser});
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).json({message:"Server error"});
        });

    }
    
  
};

module.exports = userController;
