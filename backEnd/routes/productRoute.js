const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');

const { 
    getProducts 
} = require('../controllers/productController.js');

router.get('/', getProducts);

module.exports = router;