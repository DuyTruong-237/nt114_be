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
    cre:{
        type: Number, 
        require:true,
    },
    coProcess:{
        type: Number
    },
    coPractice:{
        type: Number 
    },
    coMidterm:{
        type: Number
    },
    coEndterm:{
        type: Number
    },
},{timestamps:true})
const subject = mongoose.model('Subject',subjSchema);
module.exports= subject;


