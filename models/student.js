const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    id:{
        type: String,
        require: true,
        maxLength:50,
        unique: true
    },
    idUser:{
        type: String,ref: 'User', required: true, maxLength: 50,unique:true
    },
    department_id:{
        type:  mongoose.Schema.Types.ObjectId,ref: 'Department', required: true, maxLength: 50
    },
    acclass_id: {
        type:  mongoose.Schema.Types.ObjectId,ref: 'Acclass', maxLength: 50
    },
    name: {
        type: String,
        require:true,
        maxLength: 50
    },
    CI: {
        type: String,
       
        maxLength: 50
    },
    dob: {
        type: Date,
        
      
    },
    sex: {
        type: Number,
        
    },
    address: {
        type: String,
       
        
    },
    email: {
        type: String,
       
        maxLength: 50
    },
    phone_num: {
        type: String,
        
        maxLength: 15
    },
    majors: {
        type: String,
       
        maxLength: 50
    },
    train_sys:{
        type: String,
       
        maxLength: 50
    },
    status: {
        type: String,
       
        maxLength: 50
    },

},{timestamps:true})
const student = mongoose.model('Student',studentSchema);
module.exports= student;