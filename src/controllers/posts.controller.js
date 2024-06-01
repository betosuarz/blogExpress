const getAllPosts = (req, res) => {
    res.send('Se recuperan todas las publicaciones');
}

const createPost = (req, res) => {
    res.send('Se crea una nueva publicación');
}

module.exports = {
    getAllPosts, createPost
}