import express from 'express';
const router = express.Router();

// importar el modelo nota
import libroSchema from '../models/libro';




router.post('/addlibro', async(req, res) => {
  const body = req.body;  
  
  const libro = libroSchema(body)    
  await libro.save()
  .then((result) => {
    res.json(
      {"Respuesta" : true

      }

    ) 
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

module.exports = router;