const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Se recuperan todos los autores');
});


module.exports = router;