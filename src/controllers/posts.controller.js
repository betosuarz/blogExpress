const post = require('../model/post.model');

const getAllPosts = async (req, res) => {
    try {
        const [result] = await post.selectAll(); 
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const createPost = (req, res) => {
    console.log(req.body['titulo']);
    const { titulo: title } = req.body;
    console.log(title);

    res.send('Se crea una nueva publicación');
}

module.exports = {
    getAllPosts, createPost
}