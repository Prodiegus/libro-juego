import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// date = fecha
const paginasSchema = new Schema({
    contenido:String
    /* idusuario:{type: Schema.Types.ObjectId, ref: 'usuario'} */
    
},{ versionKey: false }
);

paginasSchema.methods.setimagen = function setimagen() {
    
}
const paginas = mongoose.model('libro', paginasSchema);

export default paginas;