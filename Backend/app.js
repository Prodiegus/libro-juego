import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();

const URL='mongodb+srv://mongoatlas84:qiaX3MBuOhidDFof@cluster0.wjsaci1.mongodb.net/?retryWrites=true&w=majority';

//Conexion DB Local
/* const uri = 'mongodb://localhost:27017/myapp'; */
//hola
//Conexion DB nubr
const uri = 'mongodb+srv://tallersoftware:C3MOJzolhFaXvJvB@cluster0.240qpmx.mongodb.net/test';
const options = {useNewUrlParser: true};
// Or using promises
mongoose.connect(URL, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);


// Middleware
app.use(morgan('tiny'));
const corsOptions = {
  origin: 'http://localhost:8080/', // reemplaza '*' con la URL de tu aplicación cliente si es necesario
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */
app.use('/api', require('./routes/libro'));
app.use('/api', require('./routes/usuario'));


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 8001);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});


