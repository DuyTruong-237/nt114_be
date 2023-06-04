const express =require('express');
const doten = require('dotenv');
const mongoose =require('mongoose');
const cors =require('cors');
const userRoutes = require("./routes/user");
const acclassRoutes = require("./routes/acclass");
const coreRoutes = require("./routes/core");
const departRoutes = require("./routes/department");
const lecturerRoutes = require("./routes/lecturers");
const notiRoutes = require("./routes/notification");
const studentRoutes = require("./routes/student");
const subjectRoutes = require("./routes/subject");
const subclassRoutes = require("./routes/subjectclass");
const sublecRoutes = require("./routes/subjecturerers");
const ABC = require("./routes/abc");
const uploadFile = require("./routes/upload")

doten.config();
const app = express();


mongoose.connect('mongodb+srv://20522080:123456tr@cluster0.co1hxc7.mongodb.net/nt114_school_app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connect db err:', err);
});

db.once('open', () => {
  console.log('CONNECTED MONGOODB');
});
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'))
// const options = {
//     definition: {
//         openai: '3.0.0',
//         info: {
//             title: 'School app api',
//             version: '1.0.0'
//         },
//         servers: [
//             {
//                 url: 'http://localhost:8000/'
//             }
//         ]
//     },
//     apis: ['./routes/*.js']
// }
app.use("/v1/abc",ABC);
app.use("/v1/user",userRoutes);
app.use("/v1/core",coreRoutes);
app.use("/v1/acclass",acclassRoutes);
app.use("/v1/depart",departRoutes);
app.use("/v1/lecturer",lecturerRoutes);
app.use("/v1/notifi",notiRoutes);
app.use("/v1/student",studentRoutes);
app.use("/v1/subject",subjectRoutes);
app.use("/v1/subclass",subclassRoutes);
app.use("/v1/sublec",sublecRoutes);
app.use("/v1/uploadfile", uploadFile);
app.listen(3001,()=>{
    console.log('Server is running')
})
