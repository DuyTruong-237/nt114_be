const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
   idUser:{
    type: String, required: true, maxLength: 50,unique:true
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
userSchema.set('toJSON',{
    virtuals:true,
    transform: function(doc, ret){
        ret.id= ret._id;
        delete ret._id;
        delete ret._V
    }
})

const user = mongoose.model('User',userSchema);
module.exports= user;