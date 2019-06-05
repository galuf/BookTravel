const express=require('express')
let {verificaToken}=require('../../middlewares/autentication');
let app=express();
const { Router } = require('express');
const userRoute = Router();

let Categoria=require('../../modelos/categoria');

userRoute.get('/categoria',verificaToken,(req,res)=>{
    Categoria.find({})
    .sort('descripcion')
    .populate('usuario','nombre email')
    .exec((err,categorias)=>{
        if(err){
          return res.status(400).json({
            ok:false,
            err
          });
        }
       
          res.json({
            ok:true,
            categorias
          });
        })
});

userRoute.post('/post',verificaToken,(req,res)=>{
   let body=req.body
   let categoria=new Categoria({
       descripcion:body.descripcion,
       usuario:req.usuario._id
   })
 
        categoria.save((err,categoriaDB)=>{
            if(err){
                return res.status(500).json({
                    ok:false,
                    err
                })
            }
            if(!categoriaDB){
                return res.status(400).json({
                    ok:false,
                    err
                })
            }
            res.json({
                ok:true,
                categoria:categoriaDB
            })
        })
})
userRoute.get('/categoriaget/:id',verificaToken ,async (req,res) =>{
   const { params:{id}}=req
   try {
          const { descripcion ,usuario} =   await Categoria.findById(id).select('descripcion usuario')
          res.json({  success:true,categoria:{descripcion,usuario}})
   } catch (error) {
        res.json({ success:false,error:error.message});
   }
})
// userRoute.post('/categoriapost',verificaToken,async (req,res)=>{
//          const {body}=req
//          try {
//               await  Categoria.create(body);
//               res.json({  success:true,body});
//          } catch (error) {
//                res.json({ success:false,error:error.message});
 
//          }

// })
userRoute.put('/categoriaupdate/:id', verificaToken, async(req,res)=>{
        const  id=req.params.id
        const body=req.body
        let descCategoria={
            descripcion:body.descripcion
        }
        try {
                let categoria=  await  Categoria.findOneAndUpdate({_id:id},descCategoria)
                res.json({ success:true,categoria})
        } catch (error) {
                res.json({ success:false,error:error.message});

        }

})
userRoute.delete('/categoriadelete/:id',verificaToken,async(req,res)=>{
    const {params:{id}}=req

         try {
                  let  categoriad=  await Categoria.findOneAndRemove({_id:id})
                 res.json({success:true,categoriad})
         } catch (error) {
             res.json({success:false,error:{ message: 'El id no existe'}})
         }


});
module.exports=app;
module.exports = userRoute;