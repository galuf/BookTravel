var mongoose=require('mongoose')
var uniqueValidator=require('mongoose-unique-validator')
var Schema=mongoose.Schema
mongoose.Promise=global.Promise
// const {env:{MONGO_DB='mongodb://localhost/login'}}=process
// mongoose.connect(MONGO_DB,
//     {useNewUrlParser:true},
//     function(err){
//         if(err){
//             if(err)console.log(err)
//         }
//         else console.log('Conexion exitosa')
//     })
    let rolesValidos={
        values:['ADMIN_ROLE','USER_ROLE'],
        message:'{VALUE} no es un error valido'
    }
    const userSchema=new Schema({
        nombre:{type:String,'default':null},
        usuario:{type:String,'default':null},
        email:{type:String,'default':null,unique:true},
        password:{type:String,'default':null},
        //cpassword:{type:String,'default':null},
        sexo:{type:String,'default':null },
        google:{type:Boolean,'default':true},
        date:{type:Date,'default':new Date()}

    })
    //userSchema.methods.generateHash=function(password){
    //    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
   // }
   userSchema.methods.toJSON=function(){
       let user=this;
       let userObject=user.toObject();
       delete userObject.password;
       return userObject;
   }
    userSchema.plugin(uniqueValidator,{message:'{PATH}'})
    const Users=mongoose.model('Users',userSchema)
    module.exports = Users;