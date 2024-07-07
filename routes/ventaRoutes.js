const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

router.get('/', ventaController.getVentas);
router.get('/:id', ventaController.getVenta);
router.post('/', ventaController.createVenta);
router.put('/:id', ventaController.updateVenta);
router.delete('/:id', ventaController.deleteVenta);

// Endpoints adicionales
router.post('/ventas', ventaController.registrarVenta);
router.get('/consultas', ventaController.consultarBoletasVendidas);
router.get('/clientes/:id/boletas', ventaController.consultarBoletasPorCliente);
router.get('/peliculas/:id/salas', ventaController.consultarSalasPorPelicula);
router.get('/salas/:id/peliculas', ventaController.consultarPeliculasPorSala);

module.exports = router;

