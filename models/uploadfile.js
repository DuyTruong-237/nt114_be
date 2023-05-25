const mongoose =require('mongoose')

const departSchema = mongoose.Schema({
    title:{
        type : String, require : true, Maxlength : 50
    },
    des:{
        type: String
    },
    subclass:{
        type: mongoose.Schema.Types.ObjectId,ref: 'SubjectClass',  maxLength: 50
    },
     URl:{
        type : String, require : true
    },
    type:{
        type: Number,require: true
    },
    creater_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer',  maxLength: 50
    },
},{timestamps:true})
const depart = mongoose.model('Department',departSchema);
module.exports= depart;