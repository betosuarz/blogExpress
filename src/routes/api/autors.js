const router = require('express').Router();

const { getAllPosts } = require('../../controllers/autors.controller');

router.get('/', getAllAutors);


module.exports = router; 