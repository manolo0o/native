const productModel = require ('../models/productModel.js');

// get all products

exports.getProducts = async (req, res) => {
    try{
      const products = await productModel.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
};