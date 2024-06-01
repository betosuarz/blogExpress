const getAllPosts = async (req, res) => {
    const [result] = await db.query('SELECT * FROM post'); 

    res.json(result);
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