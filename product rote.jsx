// server/routes/product.js
const express = require('express');
const router = express.Router();
const { productValidator, validateProduct } = require('../validators/productValidator');
const Product = require('../models/Product');

router.post('/add', productValidator, validateProduct, async (req, res) => {
    const { name, price, description, category, stock } = req.body;
    try {
        const newProduct = new Product({ name, price, description, category, stock });
        await newProduct.save();
        res.status(201).send('Product added successfully');
    } catch (error) {
        res.status(400).send('Error adding product');
    }
});

module.exports = router;