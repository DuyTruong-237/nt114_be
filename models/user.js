const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
   idUser:{
    type: String, required: true, maxLength: 50
   },
    userName:{
        type: String, required: true, maxLength: 50
    },
    password:{
        type: String, required: true, maxLength: 50
    },
    position:{
        type: String, required: true, maxLength: 50
    }
},{timestamps:true})

const user = mongoose.model('User',userSchema);
module.exports= user;