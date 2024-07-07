let ventas = [];

exports.getVentas = (req, res) => {
    res.json(ventas);
};

exports.getVenta = (req, res) => {
    const venta = ventas.find(v => v.id === parseInt(req.params.id));
    if (!venta) {
        return res.status(404).json({ message: 'Venta not found' });
    }
    res.json(venta);
};

exports.createVenta = (req, res) => {
    const venta = {
        id: ventas.length + 1,
        id_taquillero: req.body.id_taquillero,
        id_cliente: req.body.id_cliente,
        fecha_venta: req.body.fecha_venta,
        id_funcion: req.body.id_funcion,
        id_puesto: req.body.id_puesto
    };
    ventas.push(venta);
    res.status(201).json(venta);
};

exports.updateVenta = (req, res) => {
    const venta = ventas.find(v => v.id === parseInt(req.params.id));
    if (!venta) {
        return res.status(404).json({ message: 'Venta not found' });
    }
    venta.id_taquillero = req.body.id_taquillero || venta.id_taquillero;
    venta.id_cliente = req.body.id_cliente || venta.id_cliente;
    venta.fecha_venta = req.body.fecha_venta || venta.fecha_venta;
    venta.id_funcion = req.body.id_funcion || venta.id_funcion;
    venta.id_puesto = req.body.id_puesto || venta.id_puesto;
    res.json(venta);
};

exports.deleteVenta = (req, res) => {
    ventas = ventas.filter(v => v.id !== parseInt(req.params.id));
    res.json({ message: 'Venta deleted' });
};

exports.registrarVenta = (req, res) => {
    const venta = {
        id: ventas.length + 1,
        id_taquillero: req.body.id_taquillero,
        id_cliente: req.body.id_cliente,
        fecha_venta: new Date(),
        id_funcion: req.body.id_funcion,
        id_puesto: req.body.id_puesto
    };
    ventas.push(venta);
    res.status(201).json(venta);
};

exports.consultarBoletasVendidas = (req, res) => {
    res.json(ventas);
};

exports.consultarBoletasPorCliente = (req, res) => {
    const clienteId = parseInt(req.params.id);
    const ventasCliente = ventas.filter(venta => venta.id_cliente === clienteId);
    res.json(ventasCliente);
};

exports.consultarSalasPorPelicula = (req, res) => {
    const peliculaId = parseInt(req.params.id);
    const salasPorPelicula = ventas
        .filter(venta => venta.id_funcion === peliculaId)
        .map(venta => venta.id_sala)
        .filter((value, index, self) => self.indexOf(value) === index); // Elimina duplicados
    res.json(salasPorPelicula);
};

exports.consultarPeliculasPorSala = (req, res) => {
    const salaId = parseInt(req.params.id);
    const peliculasPorSala = ventas
        .filter(venta => venta.id_sala === salaId)
        .map(venta => venta.id_pelicula)
        .filter((value, index, self) => self.indexOf(value) === index); // Elimina duplicados
    res.json(peliculasPorSala);
};

