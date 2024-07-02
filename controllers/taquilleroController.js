let taquilleros = [];

exports.getTaquilleros = (req, res) => {
    res.json(taquilleros);
};

exports.getTaquillero = (req, res) => {
    const taquillero = taquilleros.find(t => t.id === parseInt(req.params.id));
    if (!taquillero) {
        return res.status(404).json({ message: 'Taquillero not found' });
    }
    res.json(taquillero);
};

exports.createTaquillero = (req, res) => {
    const taquillero = {
        id: taquilleros.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    taquilleros.push(taquillero);
    res.status(201).json(taquillero);
};

exports.updateTaquillero = (req, res) => {
    const taquillero = taquilleros.find(t => t.id === parseInt(req.params.id));
    if (!taquillero) {
        return res.status(404).json({ message: 'Taquillero not found' });
    }
    taquillero.nombre = req.body.nombre || taquillero.nombre;
    taquillero.apellido = req.body.apellido || taquillero.apellido;
    res.json(taquillero);
};

exports.deleteTaquillero = (req, res) => {
    taquilleros = taquilleros.filter(t => t.id !== parseInt(req.params.id));
    res.json({ message: 'Taquillero deleted' });
};

