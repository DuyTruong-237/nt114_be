const mongoose =require('mongoose')

const subjSchema = mongoose.Schema({
   subclassid:{
        type: Int32Array, 
        required: true, 
        maxLength: 50,
   },
    subname:{
        type: String,
        required: true,
        maxLength: 50
    },
    lectureid:{
        type: Int32Array,
        required: true,
        maxLength: 50
    },
    term:{
        type: Int8Array,
        required: true,
        maxLength: 1,
    }
})

