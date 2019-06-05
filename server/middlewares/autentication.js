const jwt=require('jsonwebtoken')

//========
//verificar token
///======
let verificaToken = (req,res,next)=> {
  let token=req.get('token');//
  jwt.verify(token,process.env.SEED,(err,decoded)=>{
   
     if( err ) {
        return res.status(401).json({
            ok:false,
            err:{
                message:'token no valido'
            }
        })
     }
     req.usuario=decoded.usuario;
     //hace que se ejecute la siguiente funcion
     next();


  })
};
module.exports={verificaToken}