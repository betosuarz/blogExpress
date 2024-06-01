
const router = require('express').Router();

router.use('/posts', require('./api/posts'))
router.use('/autors', require('./api/autors'))


module.exports = router;