const express = require('express');


const router = express.Router();
const { createUser } = require('../controllers/user');

router.post('/create-user', createUser);

module.exports = router;


// Ce fichier définit les routes liées aux utilisateurs de votre application.
// Il utilise le module Express pour créer un routeur, puis déclare et exporte les routes spécifiques liées aux utilisateurs.
// Il importe également le contrôleur associé pour traiter les requêtes HTTP liées aux utilisateurs.