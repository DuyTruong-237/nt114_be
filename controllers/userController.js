const userModel = require("../models/user");
const {v4: uuidv4} = require('uuid');
const multer = require('multer');
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("express");
let  idsetup;
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./uploads'); // thư mục để lưu file upload

    },
    filename: function (req,file, cb){
        cb(null,idsetup); // đặt tên file upload là tên góc của file
    }
});
 const upload=multer({storage:storage});
let tokens=[]

const userController = {
    //upload : multer({storage:storage}),
    addUser : async (req, res)=>{
        try{
           idsetup="USER"+ uuidv4().substr(0,6).toString();
           upload.single('avatar')(req,res, async function (err)
           {
            if(err)
            {
                console.error(err);
                res.status(500).json({ message: "Server error1" });
            }else{
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                console.log(hashedPassword)
                const newUser = new userModel ({
                    idUser:idsetup,
                    userName:req.body.userName,
                    password:hashedPassword,
                    position:req.body.position,
                    avatar: req.file ? req.file.filename : null});
                   
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
        const id= req.params.idUser
        
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

    },
    login : async (req,res)=>{
        try{
            //const {userName, password} = req.body;
            const userName=req.body.userName;
            const password= req.body.password;
            console.log(userName)
            console.log(password);
            const user= await userModel.findOne({userName});
            if(!user){
                return res.status(401).json({message:"user not found"});
            }
             //const imagePath = path.join(__dirname, 'uploads', user.avatar );
            //  user.avatar=imagePath;
            // console.log(user.imagePath)
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                return res.status(401).json({message:"Invalid username or password"});
            }
            const token = jwt.sign({userId: user._id},'mykey',{expiresIn: '1h'});
            tokens.push(token)
           
            res.json({token,user})
           
           
        } catch(err){
            res.status(500).json({ message: 'Server error' });
        }
    },
    logout : async (req,res)=>{
        try{
           
            console.log( req.headers.authorization)
            tokens = tokens.filter(
                (token) => token !==  req.headers.authorization
            );
           
            res.status(200).json("Logged out !");
        }catch(err){
            res.status(200).json("server err !");
        }
    }
    
  
};

module.exports = userController;
