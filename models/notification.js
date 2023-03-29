const mongoose = require('mongoose');

const notitSchema = mongoose.Schema({
    noti_id:{
        type: String,
        require:true,
        maxLength: 50
    },
    title:{
        type: String,
        require:true,
        
    },
    des:{
        type: String,
        require:true,
    },
    day:{
        type: Date, require: true
    },
    time:{
        type: TimeRanges, require: true
    },
    type:{
        type: Number,
        require: true

    },
    subject_class_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Subject_Class', required: true, maxLength: 50
        
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