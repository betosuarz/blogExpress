const express = require('express');
const dayjs = require('dayjs');
const fs = require('node:fs/promises');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    console.log(currentDate);
    req.currentDate = currentDate;
    next();
});

app.use(async (req, res, next) => {
    const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const data = `[${currentDate}] Método: ${req.method}. Url: ${req.url}\n`;

    await fs.appendFile('main.log', data);

    next();
});

app.use('/api', require('./routes/api'));

app.use((err, req, res, next) => { 
    res.status(500).json({ error: err.message });
})


module.exports = app;