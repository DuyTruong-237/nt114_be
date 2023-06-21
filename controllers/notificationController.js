const { response } = require("express");
const notificationModel = require("../models/notification");
const noti = require("../models/notification");

const notificationController = {
    addNoti : async(req,res)=>{
        try{
            
            req.body.day= new Date();
           
           
           
           
            const noti= new notificationModel(req.body)
            console.log(noti)
            await noti.save();
            res.status(201).json(noti);
        }catch(err){
            res.status(500).json("Server not found");
        }
    },
    getNotiAsType : async(req,res)=>{
        try{
            const type= req.params.type;
            console.log(type)
            const Noti=  await notificationModel.find({type:type});
            console.log(Noti)
            res.status(201).json(Noti);
        }catch(err){
            res.status(500).json("Server not found");
        }
    }
  
};

module.exports = notificationController;
