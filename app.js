const express = require('express');
const app = express();

app.use(express.json());

const cineRoutes = require('./routes/cineRoutes');
const peliculaRoutes = require('./routes/peliculaRoutes');
const salaRoutes = require('./routes/salaRoutes');
const filaRoutes = require('./routes/filaRoutes');
const puestoRoutes = require('./routes/puestoRoutes');
const sillaRoutes = require('./routes/sillaRoutes');
const taquilleroRoutes = require('./routes/taquilleroRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const ventaRoutes = require('./routes/ventaRoutes');
const localidadRoutes = require('./routes/localidadRoutes');

app.use('/api/cines', cineRoutes);
app.use('/api/peliculas', peliculaRoutes);
app.use('/api/salas', salaRoutes);
app.use('/api/filas', filaRoutes);
app.use('/api/puestos', puestoRoutes);
app.use('/api/sillas', sillaRoutes);
app.use('/api/taquilleros', taquilleroRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/ventas', ventaRoutes);
app.use('/api/localidades', localidadRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
