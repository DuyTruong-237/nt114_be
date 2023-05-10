const mongoose = require('mongoose');

const notitSchema = mongoose.Schema({
    
    title:{
        type: String,
        require:true,
        
    },
    des:{
        type: String,
        require:true,
    },
    day:{
        type:Date , require: true
    },
    type:{
        type: Number,
        require: true

    },
    subject_class_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Subject_Class', maxLength: 50
        
    },
    creater_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'User', required: true, maxLength: 50
    },
    status:{
        type: String,
        require:true,
        maxLength: 50
    },
    
},{timestamps:true})
const noti = mongoose.model('Notification',notitSchema);
module.exports= noti;