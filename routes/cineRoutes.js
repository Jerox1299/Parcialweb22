const express = require('express');
const router = express.Router();
const cineController = require('../controllers/cineController');

router.get('/', cineController.getCines);
router.get('/:id', cineController.getCine);
router.post('/', cineController.createCine);
router.put('/:id', cineController.updateCine);
router.delete('/:id', cineController.deleteCine);

module.exports = router;

