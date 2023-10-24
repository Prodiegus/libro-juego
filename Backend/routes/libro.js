import express from 'express';
const router = express.Router();

// importar el modelo nota
import libroSchema from '../models/libro';
import usuarioSchema from '../models/usuario';




router.post('/addlibro', async(req, res) => {
  const body = req.body;  
  
  const libro = libroSchema(body)
  await libro.save()
  .then(async(result) => {
    /* res.json(  
      result
    )  */
    await usuarioSchema.findOneAndUpdate(

      {_id:result.idusuario},
      {
        $push: {
          libros: result._id
        }
      },
      {
        new: true
      }
    )
    .then((resultado) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    }); 
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  }); 
  }
);

module.exports = router;