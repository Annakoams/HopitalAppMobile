const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: Buffer,


})
userSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error('Invalid Email')
    try {
        const user = await this.findOne({ email })
        if (user) {
            console.log('Email is already in use:', email);
            return false
        }

        return true;
    } catch (error) {
        console.log('error inside isThisEmailInUse', error.message)
        return false
    }

}
// userSchema.method.isThisEmailInUse

module.exports = mongoose.model('User', userSchema)


// Ce fichier définit le schéma du modèle Mongoose pour l'entité "Utilisateur".
// Il définit la structure des données utilisateur, y compris les propriétés telles que fullname, email, password, et avatar.
// Il expose également une méthode statique (isThisEmailInUse) pour vérifier si un e-mail est déjà utilisé.