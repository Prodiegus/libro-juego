import express from 'express';
const router = express.Router();

// importar el modelo nota
import usuarioSchema from '../models/usuario';



router.post('/addusuario', async(req, res) => {
  const body = req.body;  
  
  const usuario = usuarioSchema(body)    
  await usuario.save()
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
router.post('/loginusuario', async(req, res) => {
  const body = req.body;  
  console.log(body)
  const usuario = body.usuario
  await usuarioSchema.findOne(
    {
      usuario 
    }
  )
  .then((result) => {
    if (result.contraseña == body.contraseña){
      res.json(
        {
          "Login" : true
        }
      )
    }
    else{
      res.json(
        {
          "Login" : false
        }
      )
    }
 
    
  })
  .catch((err) => {
    console.log(err)
    res.json(err)
  });

  }
);
module.exports = router;