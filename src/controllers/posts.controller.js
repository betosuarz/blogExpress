const post = require('../model/post.model');

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await post.selectAll(); 
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const getPostById = async (req, res, next) => {
    try {
        const [result] = await post.SelectById(req.params.id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'La publicación no ha sido encontrada' });
        }

        res.json(result[0]);
    } catch (err) {
        next(err);
    }
}

const createPost = async (req, res, next) => {
    try {
        const [result] = await post.insert(req.body); // No se maneja el error en este caso porque el error se maneja en el middleware de error en app.js 
        const [[newPost]] = await post.SelectById(result.insertId); // Se obtiene el nuevo post creado para devolverlo como respuesta 
        res.json(newPost); // Se devuelve el nuevo post creado
    } catch (err) {
        next(err);        
    }
}

module.exports = {
    getAllPosts, getPostById, createPost
}