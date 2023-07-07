const mongoose =require('mongoose')

const lecturersSchema = mongoose.Schema({
    
    id:{
        type: String,
        require:true,
        maxLength: 50
    },
    idUser:{

        type: String,ref: 'User', required: true, maxLength: 50
    },
    department_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Department', required: true, maxLength: 50, 
    },
    name:{
        type: String,
       
        maxLength: 50
    },
    CI:{
        type: String,
       
        maxLength: 50
    },
    dob:{
        type: Date
    },
    start_date:{
        type: Date
    },
    sex:{
        type: Number
    },
    address:{
        type: String

    },
    email:{
        type: String,
       
        maxLength: 50
    },
    specialize:{
        type: String,
       
        maxLength: 100
    },
    phoneNum:{
        type: String,
       
        maxLength: 15
    },
    position:{
        type: String,
       
        maxLength: 30
    },
},{timestamps:true})
const lecturer = mongoose.model('Lecturer',lecturersSchema);
module.exports= lecturer;
