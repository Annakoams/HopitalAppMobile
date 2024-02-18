const User = require('../models/user');


exports.createUser = async (req, res) => {
    const { fullname, email, password } = req.body
    const isNewUser = await User.isThisEmailInUse(email)
    if (!isNewUser)
        return res.json({
            success: false,
            message: 'This email is already in use, try sing-in 2'
        });
    const user = await User({
        fullname,
        email,
        password
    });
    await user.save();
    res.json(user)
    console.log('Inside user.js controller');
}

// Ce fichier contient les fonctions de contrôleur qui traitent la logique métier associée aux utilisateurs.
// Dans votre cas, il contient la fonction createUser, qui gère la création d'un nouvel utilisateur en vérifiant d'abord si l'e-mail est déjà utilisé.