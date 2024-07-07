let localidades = [];

exports.getLocalidades = (req, res) => {
    res.json(localidades);
};

exports.getLocalidad = (req, res) => {
    const localidad = localidades.find(l => l.id === parseInt(req.params.id));
    if (!localidad) {
        return res.status(404).json({ message: 'Localidad not found' });
    }
    res.json(localidad);
};

exports.createLocalidad = (req, res) => {
    const localidad = {
        id: localidades.length + 1,
        nombre: req.body.nombre,
        id_sala: req.body.id_sala
    };
    localidades.push(localidad);
    res.status(201).json(localidad);
};

exports.updateLocalidad = (req, res) => {
    const localidad = localidades.find(l => l.id === parseInt(req.params.id));
    if (!localidad) {
        return res.status(404).json({ message: 'Localidad not found' });
    }
    localidad.nombre = req.body.nombre || localidad.nombre;
    localidad.id_sala = req.body.id_sala || localidad.id_sala;
    res.json(localidad);
};

exports.deleteLocalidad = (req, res) => {
    localidades = localidades.filter(l => l.id !== parseInt(req.params.id));
    res.json({ message: 'Localidad deleted' });
};

