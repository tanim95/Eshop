import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
connectDB();

const port = process.env.PORT || 5000;
const www = process.env.WWW || '/';
app.use(express.static(www));
console.log(`serving ${www}`);

app.get(www, (req, res) => {
  res.send(`Welcome to Eshop...`);
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () =>
  console.log(
    `sever running in ${process.env.NODE_ENV} mode on http://localhost:${port}`
  )
);
