const express = require('express');
const products = require('./data/products');

const app = express();
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
app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
