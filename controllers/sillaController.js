let sillas = [];

exports.getSillas = (req, res) => {
    res.json(sillas);
};

exports.getSilla = (req, res) => {
    const silla = sillas.find(s => s.id === parseInt(req.params.id));
    if (!silla) {
        return res.status(404).json({ message: 'Silla not found' });
    }
    res.json(silla);
};

exports.createSilla = (req, res) => {
    const silla = {
        id: sillas.length + 1,
        estado: req.body.estado,
        id_puesto: req.body.id_puesto
    };
    sillas.push(silla);
    res.status(201).json(silla);
};

exports.updateSilla = (req, res) => {
    const silla = sillas.find(s => s.id === parseInt(req.params.id));
    if (!silla) {
        return res.status(404).json({ message: 'Silla not found' });
    }
    silla.estado = req.body.estado || silla.estado;
    silla.id_puesto = req.body.id_puesto || silla.id_puesto;
    res.json(silla);
};

exports.deleteSilla = (req, res) => {
    sillas = sillas.filter(s => s.id !== parseInt(req.params.id));
    res.json({ message: 'Silla deleted' });
};

