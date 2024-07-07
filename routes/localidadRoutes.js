const express = require('express');
const router = express.Router();
const localidadController = require('../controllers/localidadController');

router.get('/', localidadController.getLocalidades);
router.get('/:id', localidadController.getLocalidad);
router.post('/', localidadController.createLocalidad);
router.put('/:id', localidadController.updateLocalidad);
router.delete('/:id', localidadController.deleteLocalidad);

module.exports = router;
