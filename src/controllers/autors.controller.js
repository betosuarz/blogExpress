const getAllAutors = (req, res) => {
    res.send('Se recuperan todos los autores');
}

const createAutors = (req, res) => {
    res.send('Se crea un nuevo autor');
}

module.exports = {
    getAllAutors, createAutors
}