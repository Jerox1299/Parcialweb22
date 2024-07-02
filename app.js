const express = require('express');
const app = express();

app.use(express.json());

const peliculaRoutes = require('./routes/peliculaRoutes');
const salaRoutes = require('./routes/salaRoutes');
const filaRoutes = require('./routes/filaRoutes');
const puestoRoutes = require('./routes/puestoRoutes');
const sillaRoutes = require('./routes/sillaRoutes');
const taquilleroRoutes = require('./routes/taquilleroRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const boletaRoutes = require('./routes/boletaRoutes');

app.use('/api/peliculas', peliculaRoutes);
app.use('/api/salas', salaRoutes);
app.use('/api/filas', filaRoutes);
app.use('/api/puestos', puestoRoutes);
app.use('/api/sillas', sillaRoutes);
app.use('/api/taquilleros', taquilleroRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/boletas', boletaRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
