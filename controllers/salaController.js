let salas = [];

exports.getSalas = (req, res) => {
    res.json(salas);
};

exports.getSala = (req, res) => {
    const sala = salas.find(s => s.id === parseInt(req.params.id));
    if (!sala) {
        return res.status(404).json({ message: 'Sala not found' });
    }
    res.json(sala);
};

exports.createSala = (req, res) => {
    const sala = {
        id: salas.length + 1,
        nombre: req.body.nombre,
        capacidad: req.body.capacidad
    };
    salas.push(sala);
    res.status(201).json(sala);
};

exports.updateSala = (req, res) => {
    const sala = salas.find(s => s.id === parseInt(req.params.id));
    if (!sala) {
        return res.status(404).json({ message: 'Sala not found' });
    }
    sala.nombre = req.body.nombre || sala.nombre;
    sala.capacidad = req.body.capacidad || sala.capacidad;
    res.json(sala);
};

exports.deleteSala = (req, res) => {
    salas = salas.filter(s => s.id !== parseInt(req.params.id));
    res.json({ message: 'Sala deleted' });
};
