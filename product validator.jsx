// server/validators/productValidator.js
const { body, validationResult } = require('express-validator');

const productValidator = [
    body('name')
        .isLength({ min: 1 })
        .withMessage('Product name is required.'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be a positive number.'),
    body('description')
        .isLength({ max: 500 })
        .withMessage('Description cannot exceed 500 characters.'),
    body('category')
        .isLength({ min: 1 })
        .withMessage('Category is required.'),
    body('stock')
        .isInt({ gt: -1 })
        .withMessage('Stock must be a non-negative integer.')
];

const validateProduct = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { productValidator, validateProduct };