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
        const [result] = await autor.selectById(req.params.id);
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
        const [[newAutor]] = await autor.selectById(result.insertId);
        res.json(newAutor);
    } catch (err) {
        next(err);        
    }
}

const updateAutorById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await autor.updateAutorById(id, req.body);
        if (result.changedRows === 1) {
            const [[updateAutor]] = await autor.selectById(id);
            res.json(updateAutor);
        } else {
            res.status(404).json({ error: 'Se ha producido un error al actualizar el autor' });
        }
    } catch (err) {
        next(err);
    }
}

const deleteAutorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const [result] = await autor.deleteAutorById(id);

        if (result.affectedRows === 1) {
            res.json({ succes: 'El autor ha sido eliminado satisfactoriamente' });
        } else {
            res.status(404).json({ error: 'El autor no existe' });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllAutors, getAutorById, createAutor, updateAutorById, deleteAutorById
}