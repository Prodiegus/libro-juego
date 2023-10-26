import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// date = fecha
const paginaSchema = new Schema({
    contenido:String,
    imagen: String,
    numero: String
    /* idusuario:{type: Schema.Types.ObjectId, ref: 'usuario'} */
},{ versionKey: false }
);

paginaSchema.methods.setimagen = function setimagen() {
    
}
const pagina = mongoose.model('pagina', paginaSchema);

export default pagina;