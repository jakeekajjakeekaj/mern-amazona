import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({}); //o usar Product.deleteOne({}), esto fue reemplazado ya que Product.remove({}) is deprecated
  const createdProducts = await Product.insertMany(data.products);

  await User.deleteMany({}); //o usar Product.deleteOne({}), esto fue reemplazado ya que Product.remove({}) is deprecated
  const createdUsers = await User.insertMany(data.users);

  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
