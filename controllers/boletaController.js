let boletas = [];

exports.getBoletas = (req, res) => {
    res.json(boletas);
};

exports.getBoleta = (req, res) => {
    const boleta = boletas.find(b => b.id === parseInt(req.params.id));
    if (!boleta) {
        return res.status(404).json({ message: 'Boleta not found' });
    }
    res.json(boleta);
};

exports.createBoleta = (req, res) => {
    const boleta = {
        id: boletas.length + 1,
        id_silla: req.body.id_silla,
        id_pelicula: req.body.id_pelicula,
        id_taquillero: req.body.id_taquillero,
        id_cliente: req.body.id_cliente,
        fecha_venta: req.body.fecha_venta
    };
    boletas.push(boleta);
    res.status(201).json(boleta);
};

exports.updateBoleta = (req, res) => {
    const boleta = boletas.find(b => b.id === parseInt(req.params.id));
    if (!boleta) {
        return res.status(404).json({ message: 'Boleta not found' });
    }
    boleta.id_silla = req.body.id_silla || boleta.id_silla;
    boleta.id_pelicula = req.body.id_pelicula || boleta.id_pelicula;
    boleta.id_taquillero = req.body.id_taquillero || boleta.id_taquillero;
    boleta.id_cliente = req.body.id_cliente || boleta.id_cliente;
    boleta.fecha_venta = req.body.fecha_venta || boleta.fecha_venta;
    res.json(boleta);
};

exports.deleteBoleta = (req, res) => {
    boletas = boletas.filter(b => b.id !== parseInt(req.params.id));
    res.json({ message: 'Boleta deleted' });
};

exports.registrarVenta = (req, res) => {
    const boleta = {
        id: boletas.length + 1,
        id_silla: req.body.id_silla,
        id_pelicula: req.body.id_pelicula,
        id_taquillero: req.body.id_taquillero,
        id_cliente: req.body.id_cliente,
        fecha_venta: new Date()
    };
    boletas.push(boleta);
    res.status(201).json(boleta);
};


exports.consultarBoletasVendidas = (req, res) => {
    res.json(boletas);
};


exports.consultarBoletasPorCliente = (req, res) => {
    const clienteId = parseInt(req.params.id);
    const boletasCliente = boletas.filter(boleta => boleta.id_cliente === clienteId);
    res.json(boletasCliente);
};

exports.consultarSalasPorPelicula = (req, res) => {
    const peliculaId = parseInt(req.params.id);
    const salasPorPelicula = boletas
        .filter(boleta => boleta.id_pelicula === peliculaId)
        .map(boleta => boleta.id_sala)
        .filter((value, index, self) => self.indexOf(value) === index); // Elimina duplicados
    res.json(salasPorPelicula);
};

exports.consultarPeliculasPorSala = (req, res) => {
    const salaId = parseInt(req.params.id);
    const peliculasPorSala = boletas
        .filter(boleta => boleta.id_sala === salaId)
        .map(boleta => boleta.id_pelicula)
        .filter((value, index, self) => self.indexOf(value) === index); // Elimina duplicados
    res.json(peliculasPorSala);
};
