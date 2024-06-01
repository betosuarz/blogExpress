const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Se recuperan todas las publicaciones');
});


module.exports = router;