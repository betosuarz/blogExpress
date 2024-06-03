const router = require('express').Router();

const { getAllPosts, getPostById, getPostsByAutorId, createPost, updatePostById, deletePostById } = require('../../controllers/posts.controller');

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.get('/autor/:autor_id', getPostsByAutorId);
router.post('/', createPost);
router.put('/:id', updatePostById);
router.delete('/:id', deletePostById);

module.exports = router; 