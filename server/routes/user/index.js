const express=require('express');
const bcrypt=require('bcrypt')
const { Router } = require('express');
const Users = require('../../modelos/user');
const mongoose=require('mongoose')
const  _= require('underscore');
const {verificaToken} =require('../../middlewares/autentication')
const bodyParser=require('body-parser')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const userRoute = Router();
userRoute.get('/',(req,res) => {
  res.json({
    user: 'Vallugas esta cagando'
  });
});
//middelware  verificaToken
userRoute.get('/show',verificaToken,(req,res)=>{
  return res.json({
    usuario:req.usuario,
    nombre:req.usuario.nombre,
    email:req.usuario.email
  })
      let desde =req.query.desde || 0;
      desde =Number(desde);
      let limite =req.query.limite || 5;
      limite =Number(limite);
        //{estado:true}
                //excluye   lo demas se muestra nombre email
                Users.find({},'nombre email')
                .skip(desde)
                .limit(limite)
                .exec((err,users)=>{
                    if(err){
                      return res.status(400).json({
                        ok:false,
                        err
                      });
                    }
                    Users.count({},(err,conteo)=>{
                      res.json({
                        ok:true,
                        users,
                        cuantos:conteo
                      });
                    })

          
        })
  
})
userRoute.get('/detail/:id',verificaToken, async (req,res) => {
    const {params:{id}}=req;
  //ssss  const{req.id}=
   console.log(id)
   try { 
     const { email, nombre, usuario } = await Users.findById(id).select('email nombre usuario').lean()
       res.json({success:true,user:{email,nombre,usuario}})
    } catch (error) {
        console.log('error')
        res.json({success:false,error:error.message})
   }
  });
  userRoute.post('/detailpost', async (req, res) => {
    const {body} =req
   // let salt=bcrypt.genSaltSync(10);
      //  password=bcrypt.hashSync(body.password,10);

    var {email ,nombre,usuario,password}=body;
    var   password1=bcrypt.hashSync(password,10);
       body.password=password1

    if(!nombre){
     return res.send({success:false,message:'Error: first name cannot be blank'})
    }
    if(!email){
      return res.send({success:false,message:'Error: email cannot be blank'})
     }
    //  if(!u suario){
    //   return res.send({success:false,message:'Error: usuario cannot be blank'})
    //  }
     if(!password){
      return res.send({success:false,message:'Error: password cannot be blank'})
     }
    console.log(body)
  
    try {
      console.log('hola')
                 await Users.create(body)     
      res.json({ success: true, user: body});
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  })
  //update
userRoute.put('/detailupdate/:id', verificaToken,async (req, res) => {
  //const {params:{id}}=req
  const  id=req.params.id
  const body=req.body
  let descUsuario={
      usuario:body.usuario,
      nombre:body.nombre
  }
 // const {body} =_.pick(req.body,['nombre,usuario'])
 // console.log(body.nombre)

  try {
            let user=   await  Users.findOneAndUpdate({_id:id},descUsuario)
    res.json({ success: true, user});
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})
//get
//delete
userRoute.delete('/delete/:id',verificaToken, async (req, res) => {
 
  const {params:{id}}=req
  try {
            let userd=   await  Users.findOneAndRemove({_id:id})
    res.json({ success: true, userd});
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})
  module.exports = userRoute;