const router = require('express').Router();

const { getAllPosts, getPostById, getPostsByAutorId, createPost } = require('../../controllers/posts.controller');

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.get('/autor/:autor_id', getPostsByAutorId);
router.post('/', createPost);


module.exports = router; 