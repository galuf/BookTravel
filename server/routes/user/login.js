const express=require('express');
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');
//var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
const { Router } = require('express');
const Users = require('../../modelos/user');
const mongoose=require('mongoose')
const  _= require('underscore');
const userRoute = Router();
//const userRoute = Router();

const bodyParser=require('body-parser')
var app = express();


userRoute.post('/',(req,res)=>{
    let body=req.body
    Users.findOne({email:body.email},(err,usuarioDB)=>{
        console.log(err)
        if(err){
            return res.status(400).json({
              ok:false,
              err:{
                message:'me la suda'
              }
            });
        }
        if(!usuarioDB){
          console.log(usuarioDB)
          return res.status(400).json({
            ok:false,
            err:{
                message:'usuario o contrasela  incorrecto'
            }
          });
            
        }

        //console.log(usuarioDB)

        if(!bcrypt.compareSync(body.password,usuarioDB.password)){
          console.log('adwadawdadsasaw')

                return res.status(400).json({
                    ok:false,
                    err:{
                      
                        message:'contraseña  incorrecta'
                    }
                  });
        }
        let token=jwt.sign({
            //informacion que queremos enviar
            //al token
          usuario:usuarioDB
        },process.env.SEED,{expiresIn:process.env.CADUCIDAD_TOKEN});
        res.json({
            ok:true,
            usuario:usuarioDB,
            token
        });

    });


});



module.exports=app;
module.exports = userRoute;