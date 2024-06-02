const selectAll = () => {
    return db.query('SELECT * FROM post');
}
const SelectById = (id) => {
    return db.query('SELECT * FROM post WHERE id = ?', [id]);
}

module.exports = {
    selectAll, SelectById
}