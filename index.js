const express =require('express');
const doten = require('dotenv');
const mongoose =require('mongoose');
const cors =require('cors');
const userRoutes = require("./routes/user");
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
const options = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'School app api',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:8000/'
            }
        ]
    },
    //apis: ['./routes/*.js']
}
app.use("/v1/user",userRoutes);
app.listen(3001,()=>{
    console.log('Server is running')
})
