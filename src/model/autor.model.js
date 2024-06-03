const selectAll = () => {
    return db.query('SELECT * FROM autor');
}

const selectById = (id) => {
    return db.query('SELECT * FROM autor WHERE id = ?', [id]);
}

const insert = ({ nombre, email, imagen }) => {
    return db.query('INSERT INTO autor (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);
}

const updateAutorById = (id, { nombre, email, imagen }) => {
    return db.query(
        'UPDATE autor SET nombre = ?, email = ?, imagen = ? WHERE id = ? ', [nombre, email, imagen, id]
    );
}

const deleteAutorById = (id) => {
    return db.query('DELETE FROM autor WHERE id = ?', [id]);
}

module.exports = {
    selectAll, selectById, insert, updateAutorById, deleteAutorById
}