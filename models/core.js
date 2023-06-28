const mongoose =require('mongoose')
const subjectModel= require('./subject')

const coreSchema = mongoose.Schema({
    
    student_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Student', required: true, maxLength: 50
    },
    subject_id:{
        type: mongoose.Schema.Types.ObjectId,ref: 'Subject', required: true, maxLength: 50
    },
    subject_class:{
        type: mongoose.Schema.Types.ObjectId,ref: 'SubjectClass', maxLength: 50
    },
    process:{
        type: Number,default: 0.00,  min: 0.00, max: 10.00
    },
    practice:{
        type: Number,default: 0.00,  min: 0.00, max: 10.00
    },
    midterm:{
        type: Number,default: 0.00,  min: 0.00, max: 10.00
    },
    endterm:{
        type: Number,default: 0.00,  min: 0.00, max: 10.00
    },
    medium:{
        type: Number,default: 0.00,  min: 0.00, max: 10.00
    },
    status:{
        type:String, //require: true
    },
    passed:{
        type:Boolean, require: true,default:0
    }
},{timestamps:true})
coreSchema.pre('save',async function (next){
    try{
        const subject= await subjectModel.findById(this.subject_id);
        console.log(subject);
        const { coProcess,coPractice,coMidterm,coEndterm}=subject;
        this.medium= (this.process*coProcess/100 + this.practice*coPractice/100+this.midterm*coMidterm/100+this.endterm*coEndterm/100);
        if(this.medium>=5)
        this.passed= true;
        else this.passed=false;
        next();
    }catch(err)
    {
        console.log("Server err")
    }
   
});
// coreSchema.post('save',async function (next){
//     const subject= await subjectModel.findById(this.subject_id);
//     console.log(subject);
//     const { coProcess,coPractice,coMidterm,coEndterm}=subject;
//     this.medium= (this.process*coProcess/100 + this.practice*coPractice/100+this.midterm*coMidterm/100+this.endterm*coEndterm/100);
//     if(this.medium>=5)
//     this.passed= true;
//     else this.passed=false;
//     next();
// });
const core = mongoose.model('Core_Table',coreSchema);
module.exports= core;

