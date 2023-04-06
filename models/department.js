const mongoose =require('mongoose')

const departSchema = mongoose.Schema({
   
    name:{
        type : String, require : true, Maxlength : 50
    },
    des:{
        type: String

    },
    dean:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer',  maxLength: 50
    },
     vDean:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer',  maxLength: 50
    }

},{timestamps:true})
const depart = mongoose.model('Department',departSchema);
module.exports= depart;