const autor = require('../model/autor.model');

const getAllAutors = async (req, res) => {
    try {
        const [result] = await autor.selectAll(); 
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const createAutor = (req, res) => {
    console.log(req.body['titulo']);
    const { titulo: title } = req.body;
    console.log(title);

    res.send('Se crea un nuevo autor');
}

module.exports = {
    getAllAutors, createAutor
}