const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('our db is connected')
    })
    .catch(err => console.log(err.message));

// Ce fichier est responsable de la configuration et de l'établissement de la connexion à la base de données MongoDB via Mongoose.
// Il peut définir des schémas de modèle, mais dans votre cas, il semble principalement chargé de l'établissement de la connexion à la base de données.   