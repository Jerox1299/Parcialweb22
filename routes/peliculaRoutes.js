const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

router.get('/', peliculaController.getPeliculas);
router.get('/:id', peliculaController.getPelicula);
router.post('/', peliculaController.createPelicula);
router.put('/:id', peliculaController.updatePelicula);
router.delete('/:id', peliculaController.deletePelicula);

module.exports = router;
