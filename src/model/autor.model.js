const selectAll = () => {
    return db.query('SELECT * FROM autor');
}

const SelectById = (id) => {
    return db.query('SELECT * FROM autor WHERE id = ?', [id]);
}

const insert = ({ nombre, email, imagen }) => {
    return db.query('INSERT INTO autor (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);
}

module.exports = {
    selectAll, SelectById, insert
}