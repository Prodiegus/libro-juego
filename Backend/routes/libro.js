import express from 'express';
const router = express.Router();

// importar el modelo nota
import libroSchema from '../models/libro';
import usuarioSchema from '../models/usuario';
import paginaSchema from '../models/pagina';



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

router.post('/addpagina', async(req, res) => {
  const body = req.body;  
  
  const pagina = paginaSchema(body.pagina)
  await pagina.save()
  .then(async(result) => {
    
  
    await libroSchema.findOneAndUpdate(

      {_id:body.idlibro},
      {
        $push: {
          paginas: result._id
        }
      },
      {
        new: true
      }
    ).populate("paginas")
    .then((resultado) => {
      res.json(resultado)
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
router.get('/getlibros', async(req, res) => {
 
  await libroSchema.find(
    
  )
  .then((result) => {
    res.json(result)
    console.log(result)
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  });

  }
  
);
module.exports = router;