const mongoose =require('mongoose')

const subjSchema = mongoose.Schema({
    subject_id: {
        type: String,
        require:true,
        maxLength: 50
    },
    departmentId:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Department', required: true, maxLength: 50
    },
    name:{
        type: String,
        require:true,
        maxLength: 50
    },
    desText:{
        type: String,
        require:true,
        
    },
    coProcess:{
        type: Number, require: true, 
    },
    coPractice:{
        type: Number, require: true, 
    },
    coMidterm:{
        type: Number, require: true, 
    },
    coEndterm:{
        type: Number, require: true, 
    },
},{timestamps:true})
const subject = mongoose.model('Subject',subjSchema);
module.exports= subject;


