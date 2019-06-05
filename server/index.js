const express=require('express');
const bodyParser=require('body-parser')
const morgan=require('morgan')
const cors =require('cors');
//const routes =require ('./routes');
const api = require('./routes');
//const routes = express();
const app=express();
const mongoose=require('mongoose')
//const router = express.Router()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(api)

const PORT = process.env.PORT || 5000;
//vencimiento de token
//60 s
//60 m
//24 h
//30 d
process.env.CADUCIDAD_TOKEN=60*60*24*30

// seed de autentificacion
process.env.SEED='este-es-seed.desarrolo'|| process.env.SEED
//router.use('./routes',routes)


mongoose.connect('mongodb+srv://admin:admin@cluster0-mmg6n.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true
})

const db = mongoose.connection

db.on('open',()=>{
  console.log("BD conectada")
  app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
  });

})

//comentar crt +k     y crt+c
//  AudioDestinationNodeda
// // da
// // d
//  addEventListenersadas
// dasdsa
// da
// sda
// screendasd