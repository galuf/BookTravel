const express=require('express')
let {verificaToken}=require('../../middlewares/autentication');
let app=express();
const { Router } = require('express');
const userRoute = Router();

let Producto=require('../../modelos/productos');
userRoute.get('/get',verificaToken,(req,res)=>{
  
  let desde=req.query.desde || 0;
  desde=Number(desde)
    Producto.find({})
    .skip(desde)
      .populate('usuario','nombre email')
      .populate('categoria','descripcion')
      .exec((err,producto)=>{
          if(err){

            return   res.json({success:false,err:err.message})
          }
          
          res.json({success:true,producto})
      })


})
userRoute.get('/geto/:id',verificaToken,async(req,res)=>{
let id=req.params.id
       try {
              let producto=  await Producto.findById({_id:id})
                .populate('usuario','nombre')
                .populate('categoria','descripcion')
              res.json({success:true,producto})
       } catch (err) {
            res.json({success:false,err:err.message})
       }

})

userRoute.post('/postp',verificaToken, async (req,res)=>{
    const body=req.body
   let pproducto=new Producto({
       
            nombre:body.nombre,
            precio:body.precio,
            descripcion:body.descripcion,
            precioUni:body.precioUni,
            usuario:req.usuario._id,
           categoria:body.categoria

   })
     try {
             let  producto=await Producto.create(pproducto);
             res.json({success:true,producto})
     } catch (error) {
           res.json({success:false,error:error.message}) 
     }


})
userRoute.put('/put/:id',verificaToken, async (req,res)=>{
 const id=req.params.id
  const body=req.body
  let  uproducto={ 
     nombre:body.nombre,
     precioUni:body.precioUni
  }
  try {
         let nproducto=  await Producto.findOneAndUpdate({_id:id},uproducto)
         res.json({success:true,nproducto})

  } catch (error) {
          res.json({success:false,error:error.message}) 

  }

})   
userRoute.delete('/del/:id', async(req,res)=>{
    let id=req.params.id
    const body=req.body
     try {
         let dproducto= await Producto.findOneAndRemove({_id:id})
         dproducto.disponible=false
         res.json({success:true,producto:dproducto})

     } catch (err) {
        res.json({success:false,err:err.message}) 

     }
})
module.exports=app;
module.exports = userRoute;