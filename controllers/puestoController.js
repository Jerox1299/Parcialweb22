let puestos = [];

exports.getPuestos = (req, res) => {
    res.json(puestos);
};

exports.getPuesto = (req, res) => {
    const puesto = puestos.find(p => p.id === parseInt(req.params.id));
    if (!puesto) {
        return res.status(404).json({ message: 'Puesto not found' });
    }
    res.json(puesto);
};

exports.createPuesto = (req, res) => {
    const puesto = {
        id: puestos.length + 1,
        numero_puesto: req.body.numero_puesto,
        id_fila: req.body.id_fila
    };
    puestos.push(puesto);
    res.status(201).json(puesto);
};

exports.updatePuesto = (req, res) => {
    const puesto = puestos.find(p => p.id === parseInt(req.params.id));
    if (!puesto) {
        return res.status(404).json({ message: 'Puesto not found' });
    }
    puesto.numero_puesto = req.body.numero_puesto || puesto.numero_puesto;
    puesto.id_fila = req.body.id_fila || puesto.id_fila;
    res.json(puesto);
};

exports.deletePuesto = (req, res) => {
    puestos = puestos.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: 'Puesto deleted' });
};

