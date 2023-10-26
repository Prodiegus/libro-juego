import express from 'express';
const router = express.Router();

import paginaSchema from '../models/pagina'

// importar el modelo nota
/* import libroSchema from '../models/libro'; */

router.post('/addpagina', async(req, res) => {
    const body = req.body; 

    const pagina = paginasSchema(body)
    await pagina.save()

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
})

module.exports = router;