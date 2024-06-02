const selectAll = () => {
    return db.query('SELECT * FROM post');
}


module.exports = {
    selectAll
}
