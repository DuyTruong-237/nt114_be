const mongoose =require('mongoose')

const uploadSchema = mongoose.Schema({
    title:{
        type : String, require : true, Maxlength : 50
    },
    des:{
        type: String
    },
    subclass:{
        type: mongoose.Schema.Types.ObjectId,ref: 'SubjectClass',  maxLength: 50
    },
     URL:{
        type : String, require : true
    },
    type:{
        type: Number,require: true
    },
    creater_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer',  maxLength: 50
    },
},{timestamps:true})
const upload = mongoose.model('Upload',uploadSchema);
module.exports= upload;