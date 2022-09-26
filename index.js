const express = require('express');
const app = express();

app.get('/devops', (req, res)=>
{
    res.send('Bem vindo ao curso PUC ATP!')
} );

app.listen(5000);