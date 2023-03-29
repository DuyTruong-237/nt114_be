const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    id:{
        type: String,
        require: true,
        
    },
    idUser:{
        type: String, required: true, maxLength: 50
       },
    department_id:{
        type: String, required: true, maxLength: 50
       },
    
})