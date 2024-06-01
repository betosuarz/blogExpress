const getAllAutors = async (req, res) => {
    const [result] = await db.query('SELECT * FROM autor');
    
    res.json(result);
}

const createAutors = (req, res) => {
    console.log(req.body);
    res.send('Se crea un nuevo autor');
}

module.exports = {
    getAllAutors, createAutors
}