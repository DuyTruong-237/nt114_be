const mongoose =require('mongoose')

const coreSchema = mongoose.Schema({
    core_id:{
        type: String,
        require:true,
        maxLength: 50
    },
    student_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Student', required: true, maxLength: 50
    },
    subject_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Subject', required: true, maxLength: 50
    },
    subject_class:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Subject_Class', required: true, maxLength: 50
        
    },
    process:{
        type: Number, require: true, min: 0.01, max: 10.00
    },
    practice:{
        type: Number, require: true, min: 0.01, max: 10.00
    },
    midterm:{
        type: Number, require: true, min: 0.01, max: 10.00
    },
    endterm:{
        type: Number, require: true, min: 0.01, max: 10.00
    },
    medium:{
        type: Number, require: true, min: 0.01, max: 10.00
    }

},{timestamps:true})
const core = mongoose.model('Core_Table',coreSchema);
module.exports= core;

