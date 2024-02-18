const express = require('express');
require('dotenv').config();
require('./models/db');

const userRouter = require('./routes/user');

const app = express();

app.use(express.json());
app.use(userRouter);

app.get('/test', (req, res) => {
    res.send('Hello Word');
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});

// Ce fichier est le point d'entrée principal de votre application.
// Il configure et démarre le serveur Express.
// Il importe et utilise les différentes parties de votre application, comme les routeurs et la configuration du modèle de données.