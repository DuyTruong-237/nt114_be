const mongoose =require('mongoose')

const departSchema = mongoose.Schema({
    idDepartment:{
        type : String, require : true, Maxlength : 50
    },
    departmentName:{
        type : String, require : true, Maxlength : 50
    },
    desText:{

    },
    departmentDean:{
        type : String, require : true, Maxlength : 50
    }

})