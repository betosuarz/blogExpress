const selectAll = () => {
    return db.query('SELECT * FROM post');
}

const selectAllWithAuthor = () => {
    const query = `
        SELECT 
            p.*, 
            a.nombre AS autor_nombre, 
            a.email AS autor_email, 
            a.imagen AS autor_imagen 
        FROM post p 
        JOIN autor a ON p.autor_id = a.id
    `;
    return db.query(query);
}

const selectById = (id) => {
    const query = `
        SELECT 
            p.*, 
            a.nombre AS autor_nombre, 
            a.email AS autor_email, 
            a.imagen AS autor_imagen 
        FROM post p 
        JOIN autor a ON p.autor_id = a.id
        WHERE p.id = ?
    `;
    return db.query(query, [id]);
}

const insert = ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    return db.query('INSERT INTO post (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)', [titulo, descripcion, fecha_creacion, categoria, autor_id]);
}    

module.exports = {
    selectAll, selectAllWithAuthor, selectById, insert
}