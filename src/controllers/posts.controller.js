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

const createPost = (req, res) => {
    console.log(req.body['titulo']);
    const { titulo: title } = req.body;
    console.log(title);

    res.send('Se crea una nueva publicación');
}

module.exports = {
    getAllPosts, createPost, getPostById
}