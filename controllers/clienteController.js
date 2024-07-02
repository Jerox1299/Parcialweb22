let clientes = [];

exports.getClientes = (req, res) => {
    res.json(clientes);
};

exports.getCliente = (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente not found' });
    }
    res.json(cliente);
};

exports.createCliente = (req, res) => {
    const cliente = {
        id: clientes.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    };
    clientes.push(cliente);
    res.status(201).json(cliente);
};

exports.updateCliente = (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente not found' });
    }
    cliente.nombre = req.body.nombre || cliente.nombre;
    cliente.apellido = req.body.apellido || cliente.apellido;
    res.json(cliente);
};

exports.deleteCliente = (req, res) => {
    clientes = clientes.filter(c => c.id !== parseInt(req.params.id));
    res.json({ message: 'Cliente deleted' });
};

