const router = require('express').Router();

const { getAllPosts } = require('../../controllers/posts.controller');

router.get('/', getAllPosts);


module.exports = router; 