const express = require('express');
const router = express.Router();
const taquilleroController = require('../controllers/taquilleroController');

router.get('/', taquilleroController.getTaquilleros);
router.get('/:id', taquilleroController.getTaquillero);
router.post('/', taquilleroController.createTaquillero);
router.put('/:id', taquilleroController.updateTaquillero);
router.delete('/:id', taquilleroController.deleteTaquillero);

module.exports = router;

