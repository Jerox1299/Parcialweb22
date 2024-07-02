const express = require('express');
const router = express.Router();
const filaController = require('../controllers/filaController');

router.get('/', filaController.getFilas);
router.get('/:id', filaController.getFila);
router.post('/', filaController.createFila);
router.put('/:id', filaController.updateFila);
router.delete('/:id', filaController.deleteFila);

module.exports = router;
