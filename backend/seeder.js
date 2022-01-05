import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import users from './data/user.js';
import User from './model/userModel.js';
import Product from './model/productModel.js';
import Order from './model/orderModel.js';
import { exit, argv } from 'process';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createUsers = await User.insertMany(users);
    const adminUser = createUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log('Data Imported');
    exit();
  } catch (error) {
    console.log(error.message);
    exit(1);
  }
};

const removeData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log('Data Deleted');
    exit();
  } catch (error) {
    console.log(error.message);
    exit(1);
  }
};

if (argv[2] === '-d') {
  removeData();
} else {
  importData();
}
