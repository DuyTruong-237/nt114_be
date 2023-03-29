const mongoose =require('mongoose')

const departSchema = mongoose.Schema({
    id_Department:{
        type : String, require : true, Maxlength : 50
    },
    name:{
        type : String, require : true, Maxlength : 50
    },
    desText:{
        type: String

    },
    dean:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Lecturer', required: true, maxLength: 50
    }

},{timestamps:true})
const depart = mongoose.model('Department',departSchema);
module.exports= depart;