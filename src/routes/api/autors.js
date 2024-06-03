const router = require('express').Router();

const { getAllAutors, getAutorById, createAutor, updateAutorById } = require('../../controllers/autors.controller');

router.get('/', getAllAutors);
router.get('/:id', getAutorById);
router.post('/', createAutor);
router.put('/:id', updateAutorById);


module.exports = router; 