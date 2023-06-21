const mongoose =require('mongoose')

const subjSchema = mongoose.Schema({
   subclass_id:{
    type: String,
    require:true,
    maxLength: 50
   },
   subject_id:{
    type:String,
    require:true,
    maxLength:50,
    ref:'Subject'
   },
    subname:{
    type: String,
    require:true,
    maxLength: 50
    },
    lecturer_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer', required: true, maxLength: 50
    },
    term:{
        type: Number, require: true, 
       
    },
    yearSchool:{
        type: Number, require: true
    },
    startDate:{
        type: Date, require: true

    },
    endDate:{
        type: Date, require: true

    },
    status:{
        type: Number, require: true
    },
    classDay:{
        type: Number, require: true
    },
    lession:{
        type:String, require: true
    },
},{timestamps:true})
const subjectClass = mongoose.model('SubjectClass',subjSchema);
module.exports= subjectClass;

