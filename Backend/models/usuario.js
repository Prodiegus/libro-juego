import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {type:String,unique:true},
    correo: {type:String,unique:true},
    contraseña:String,
},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;