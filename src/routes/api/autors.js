const router = require('express').Router();

const { getAllAutors, createAutor } = require('../../controllers/autors.controller');

router.get('/', getAllAutors );
router.post('/', createAutor );


module.exports = router; 