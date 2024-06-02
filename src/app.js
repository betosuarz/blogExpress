const express = require('express');
const dayjs = require('dayjs');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    console.log(currentDate);
    req.currentDate = currentDate;
    next();
});

app.use('/api', require('./routes/api'));

app.use((err, req, res, next) => { 
    res.status(500).json({ error: err.message });
})


module.exports = app;