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
        const [result] = await post.insert(req.body); 
        const [[newPost]] = await post.SelectById(result.insertId);
        res.json(newPost);
    } catch (err) {
        next(err);        
    }
}

module.exports = {
    getAllPosts, getPostById, createPost
}