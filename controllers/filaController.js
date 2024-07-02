let filas = [];

exports.getFilas = (req, res) => {
    res.json(filas);
};

exports.getFila = (req, res) => {
    const fila = filas.find(f => f.id === parseInt(req.params.id));
    if (!fila) {
        return res.status(404).json({ message: 'Fila not found' });
    }
    res.json(fila);
};

exports.createFila = (req, res) => {
    const fila = {
        id: filas.length + 1,
        numero_fila: req.body.numero_fila,
        id_sala: req.body.id_sala
    };
    filas.push(fila);
    res.status(201).json(fila);
};

exports.updateFila = (req, res) => {
    const fila = filas.find(f => f.id === parseInt(req.params.id));
    if (!fila) {
        return res.status(404).json({ message: 'Fila not found' });
    }
    fila.numero_fila = req.body.numero_fila || fila.numero_fila;
    fila.id_sala = req.body.id_sala || fila.id_sala;
    res.json(fila);
};

exports.deleteFila = (req, res) => {
    filas = filas.filter(f => f.id !== parseInt(req.params.id));
    res.json({ message: 'Fila deleted' });
};

