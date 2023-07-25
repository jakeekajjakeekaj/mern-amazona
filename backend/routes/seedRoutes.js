import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({}); //o usar Product.deleteOne({}), esto fue reemplazado ya que Product.remove({}) is deprecated
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
export default seedRouter;
