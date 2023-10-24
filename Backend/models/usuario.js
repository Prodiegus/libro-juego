import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    usuario: {type:String,unique:true},
    correo: {type:String,unique:true},
    contraseña:String,
    libros: [{type: Schema.Types.ObjectId, ref: 'libro'}]
},{ versionKey: false }
);

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;