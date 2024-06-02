const router = require('express').Router();

const { getAllAutors, getAutorById, createAutor } = require('../../controllers/autors.controller');

router.get('/', getAllAutors);
router.get('/:id', getAutorById);
router.post('/', createAutor);


module.exports = router; 