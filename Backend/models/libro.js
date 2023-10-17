import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const libroSchema = new Schema({
    titulo:String,
    sinopsis:String,
    autor:String,
    imagen:String,
    
},{ versionKey: false }
);

const libro = mongoose.model('libro', libroSchema);

export default libro;