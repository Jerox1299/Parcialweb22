let peliculas = [];

exports.getPeliculas = (req, res) => {
    res.json(peliculas);
};

exports.getPelicula = (req, res) => {
    const pelicula = peliculas.find(p => p.id === parseInt(req.params.id));
    if (!pelicula) {
        return res.status(404).json({ message: 'Pelicula not found' });
    }
    res.json(pelicula);
};

exports.createPelicula = (req, res) => {
    const pelicula = {
        id: peliculas.length + 1,
        titulo: req.body.titulo,
        genero: req.body.genero,
        duracion: req.body.duracion,
        clasificacion: req.body.clasificacion
    };
    peliculas.push(pelicula);
    res.status(201).json(pelicula);
};

exports.updatePelicula = (req, res) => {
    const pelicula = peliculas.find(p => p.id === parseInt(req.params.id));
    if (!pelicula) {
        return res.status(404).json({ message: 'Pelicula not found' });
    }
    pelicula.titulo = req.body.titulo || pelicula.titulo;
    pelicula.genero = req.body.genero || pelicula.genero;
    pelicula.duracion = req.body.duracion || pelicula.duracion;
    pelicula.clasificacion = req.body.clasificacion || pelicula.clasificacion;
    res.json(pelicula);
};

exports.deletePelicula = (req, res) => {
    peliculas = peliculas.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: 'Pelicula deleted' });
};
