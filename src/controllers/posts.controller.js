const getAllPosts = (req, res) => {
    res.send('Se recuperan todas las publicaciones');
}

const createPost = (req, res) => {
    console.log(req.body);
    res.send('Se crea una nueva publicación');
}

module.exports = {
    getAllPosts, createPost
}