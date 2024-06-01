const router = require('express').Router();

const { getAllPosts, createPost } = require('../../controllers/posts.controller');

router.get('/', getAllPosts );
router.post('/', createPost );


module.exports = router; 