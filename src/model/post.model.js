const selectAll = () => {
    return db.query('SELECT * FROM post');
}
const SelectById = (id) => {
    return db.query('SELECT * FROM post WHERE id = ?', [id]);
}

const insert = ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    return db.query('INSERT INTO post (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)', [titulo, descripcion, fecha_creacion, categoria, autor_id]);
}    

module.exports = {
    selectAll, SelectById, insert
}