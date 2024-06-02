const selectAll = () => {
    return db.query('SELECT * FROM autor');
}


module.exports = {
    selectAll
}
