const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ 
  product__Image: {
    type: String, 
    required: true
  },
  product__Name: {
    type: String, 
    required: true
  },
  product__Price: {
    type: Number, 
    required: true
  },
  product__Category: {
    type: String, 
    required: true
  },
  product__Size: {
    type: String, 
    required: true
  },
  product__Description: {
    type: String, 
    required: true
  },
  product__Rating: {
    type: Number, 
    required: true
  },
  product__Reviews: {
    type: Number, 
    required: true
  },
  product__Avg_Delivery_Time: {
    type: Number, 
    required: true
  }
},{collection: 'Products'});

const productModel = mongoose.model('Products', productSchema);
module.exports = productModel;
