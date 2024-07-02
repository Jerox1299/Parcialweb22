const express = require('express');
const router = express.Router();
const puestoController = require('../controllers/puestoController');

router.get('/', puestoController.getPuestos);
router.get('/:id', puestoController.getPuesto);
router.post('/', puestoController.createPuesto);
router.put('/:id', puestoController.updatePuesto);
router.delete('/:id', puestoController.deletePuesto);

module.exports = router;
