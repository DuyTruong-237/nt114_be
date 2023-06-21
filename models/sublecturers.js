const mongoose =require('mongoose')

const sublecturersSchema = mongoose.Schema({
   
    lecturer_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer', required: true, maxLength: 50
    },
    subject_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Subject', required: true, maxLength: 50

    },
},{timestamps:true})
const sublec = mongoose.model('SubjectLecture',sublecturersSchema);
module.exports= sublec;