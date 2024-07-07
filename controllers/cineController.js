let cines = [];

exports.getCines = (req, res) => {
    res.json(cines);
};

exports.getCine = (req, res) => {
    const cine = cines.find(c => c.id === parseInt(req.params.id));
    if (!cine) {
        return res.status(404).json({ message: 'Cine not found' });
    }
    res.json(cine);
};

exports.createCine = (req, res) => {
    const cine = {
        id: cines.length + 1,
        nombre: req.body.nombre,
        direccion: req.body.direccion
    };
    cines.push(cine);
    res.status(201).json(cine);
};

exports.updateCine = (req, res) => {
    const cine = cines.find(c => c.id === parseInt(req.params.id));
    if (!cine) {
        return res.status(404).json({ message: 'Cine not found' });
    }
    cine.nombre = req.body.nombre || cine.nombre;
    cine.direccion = req.body.direccion || cine.direccion;
    res.json(cine);
};

exports.deleteCine = (req, res) => {
    cines = cines.filter(c => c.id !== parseInt(req.params.id));
    res.json({ message: 'Cine deleted' });
};

