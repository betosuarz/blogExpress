const autor = require('../model/autor.model');

const getAllAutors = async (req, res, next) => {
    try {
        const [result] = await autor.selectAll(); 
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const getAutorById = async (req, res, next) => {
    try {
        const [result] = await autor.SelectById(req.params.id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'El autor no ha sido encontrado' });
        }

        res.json(result[0]);
    } catch (err) {
        next(err);
    }
}

const createAutor = async (req, res, next) => {
    try {
        const [result] = await autor.insert(req.body); 
        const [[newAutor]] = await autor.SelectById(result.insertId);
        res.json(newAutor);
    } catch (err) {
        next(err);        
    }
}

module.exports = {
    getAllAutors, getAutorById, createAutor
}