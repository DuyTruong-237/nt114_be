const mongoose = require('mongoose');

const acclassSchema = mongoose.Schema({
    acclass_id:{
        type: String,
        require:true,
        maxLength: 50
    },
    department_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Department', required: true, maxLength: 50

    },
    lectures_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer', required: true, maxLength: 50

    },
    name:{
        type: String,
        require:true,
        maxLength: 50

    }
},{timestamps:true})
const acclass = mongoose.model('Acclass',acclassSchema);
module.exports= acclass;