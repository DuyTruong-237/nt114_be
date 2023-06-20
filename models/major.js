const mongoose = require('mongoose');

const majorSchema = mongoose.Schema({

    department_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Department', required: true, maxLength: 50
    },
    name:{
        type: String,
        require:true,
        maxLength: 50
    },
    CUN:{
        type: Number,
        require:true,
    },
    des:{
        type: String,
    }

},{timestamps:true})
const Major = mongoose.model('Major',majorSchema);
module.exports= Major;