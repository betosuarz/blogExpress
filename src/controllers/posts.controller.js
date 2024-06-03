const post = require('../model/post.model');

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await post.selectAllWithAuthor(); 
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const getPostById = async (req, res, next) => {
    try {
        const [result] = await post.selectById(req.params.id);
        if (result.length === 0) {
            return res.status(404).json({ error: 'La publicación no ha sido encontrada' });
        }

        res.json(result[0]);
    } catch (err) {
        next(err);
    }
}

const getPostsByAutorId = async (req, res, next) => {
    try {
        const [result] = await post.selectByAutorId(req.params.autor_id);
        if (result.length === 0) {
            res.status(404).json('La publicación no ha sido encontrada');
        } else if (result.length === 1) {
            res.json(result[0]);
        } else {
            res.json(result);
        }
    } catch (err) {
        next(err);
    }
}

const createPost = async (req, res, next) => {
    try {
        const [result] = await post.insert(req.body); 
        const [[newPost]] = await post.selectById(result.insertId);
        res.json(newPost);
    } catch (err) {
        next(err);        
    }
}

const updatePostById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await post.updatePostById(id, req.body);
        if (result.changedRows === 1) {
            const [[updatedPost]] = await post.selectById(id);
            res.json(updatedPost);
        } else {
            res.status(404).json({ error: 'Se ha producido un error al actualizar la publicación' });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllPosts, getPostById, getPostsByAutorId, createPost, updatePostById
}