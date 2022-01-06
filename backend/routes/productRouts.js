import { Router } from 'express';
import Product from '../model/productModel.js';

// Fetch all products
const productsRoute = Router();
productsRoute.get('/', async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
    next();
  } catch (error) {
    console.log(error.message);
  }
});
// Fetch single product
productsRoute.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json({ message: 'Product not found!' });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
});

export default productsRoute;
