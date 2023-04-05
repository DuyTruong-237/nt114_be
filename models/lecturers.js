const mongoose =require('mongoose')

const lecturersSchema = mongoose.Schema({
    
    id:{
        type: String,
        require:true,
        maxLength: 50
    },
    idUser:{

        type: mongoose.Schema.Types.ObjectId,ref: 'User', required: true, maxLength: 50
    },
    // idDepartment:{
    //     type: mongoose.Schema.Types.ObjectId,ref: 'Department', required: true, maxLength: 50
    // },
    name:{
        type: String,
        require:true,
        maxLength: 50
    },
    // Cl:{
    //     type: String,
    //     require:true,
    //     maxLength: 50
    // },
    // dob:{
    //     type: Date, require: true
    // },
    // start_date:{
    //     type: Date, require: true
    // },
    // sex:{
    //     type: Number, require: true
    // },
    // address:{
    //     type: String,
    //     require:true

    // },
    // email:{
    //     type: String,
    //     require:true,
    //     maxLength: 50
    // },
    // specialize:{
    //     type: String,
    //     require:true,
    //     maxLength: 100
    // },
    // phoneNum:{
    //     type: String,
    //     require:true,
    //     maxLength: 15
    // },
    // position:{
    //     type: String,
    //     require:true,
    //     maxLength: 30
    // },
},{timestamps:true})
const lecturer = mongoose.model('Lecturer',lecturersSchema);
module.exports= lecturer;
