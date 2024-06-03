const router = require('express').Router();

const { getAllAutors, getAutorById, createAutor, updateAutorById, deleteAutorById } = require('../../controllers/autors.controller');

router.get('/', getAllAutors);
router.get('/:id', getAutorById);
router.post('/', createAutor);
router.put('/:id', updateAutorById);
router.delete('/:id', deleteAutorById);


module.exports = router; 