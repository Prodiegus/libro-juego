import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// date = fecha
const libroSchema = new Schema({
    titulo:String,
    sinopsis:String,
    autor:String,
    imagen:String,
    
    
},{ versionKey: false }
);

libroSchema.methods.setimagen = function setimagen() {
    
}
const libro = mongoose.model('libro', libroSchema);

export default libro;