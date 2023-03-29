const mongoose =require('mongoose')

const departSchema = mongoose.Schema({
    idDepartment:{
        type : String, require : true, Maxlength : 50
    },
    name:{
        type : String, require : true, Maxlength : 50
    },
    desText:{

    },
    dean:{
        type : String, require : true, Maxlength : 50
    }

})