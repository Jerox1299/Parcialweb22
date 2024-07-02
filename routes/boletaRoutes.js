const express = require('express');
const router = express.Router();
const boletaController = require('../controllers/boletaController');

router.get('/', boletaController.getBoletas);
router.get('/:id', boletaController.getBoleta);
router.post('/', boletaController.createBoleta);
router.put('/:id', boletaController.updateBoleta);
router.delete('/:id', boletaController.deleteBoleta);

// Endpoints adicionales
router.post('/ventas', boletaController.registrarVenta);
router.get('/consultas', boletaController.consultarBoletasVendidas);
router.get('/clientes/:id/boletas', boletaController.consultarBoletasPorCliente);
router.get('/peliculas/:id/salas', boletaController.consultarSalasPorPelicula);
router.get('/salas/:id/peliculas', boletaController.consultarPeliculasPorSala);

module.exports = router;
