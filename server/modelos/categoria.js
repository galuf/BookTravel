const mongoose=require('mongoose')
const Schema=mongoose.Schema;
let categoriaSchema=new Schema({
    descripcion:{type:String,required: [true, 'La descripción es obligatoria']},
    usuario:{type:Schema.Types.ObjectId,ref:'Users'}
})
module.exports=mongoose.model('Categoria',categoriaSchema);