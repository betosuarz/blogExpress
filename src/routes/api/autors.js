const router = require('express').Router();

const { getAllAutors, createAutors } = require('../../controllers/autors.controller');

router.get('/', getAllAutors );
router.post('/', createAutors );


module.exports = router;