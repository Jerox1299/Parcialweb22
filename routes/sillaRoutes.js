const express = require('express');
const router = express.Router();
const sillaController = require('../controllers/sillaController');

router.get('/', sillaController.getSillas);
router.get('/:id', sillaController.getSilla);
router.post('/', sillaController.createSilla);
router.put('/:id', sillaController.updateSilla);
router.delete('/:id', sillaController.deleteSilla);

module.exports = router;

