const { check } = require('express-validator');

exports.validateUserSingUp = [
    check('fullname').trim().not().isEmpty().isLength({ min: 3, max: 20 }).withMessage('Name must be within 3 to 20 caracteres'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email address'),
    check('password').trim().not().isEmpty().isLength({ min: 8, max: 20 }).withMessage('Password must be within 3 to 20 caracteres'),
    check('confirmPassword').trim().not().isEmpty().custom((value, { req }) => {

    })

]