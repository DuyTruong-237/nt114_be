const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
   idUser:{
    type: String, required: true, maxLength: 50,unique:true
   },
    userName:{
        type: String, required: true, maxLength: 50
    },
    password:{
        type: String, required: true, maxLength: 100
    },
    position:{
        type: String, required: true, maxLength: 50
    },
    avatar:{
        type: String
    }
},{timestamps:true})

// userSchema.pre('save',function(next){
//     const user =  this;
//     if(!user.idUser){
//         user.idUser='USER'+ Date.now().toString();
//     }
//     next();
// });

const user = mongoose.model('User',userSchema);
module.exports= user;