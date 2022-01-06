import express from 'express';
import dotenv from 'dotenv';
import productsRoute from './routes/productRouts.js';
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
/////////////////Products route //////////
app.use('/api/products', productsRoute);

/////////////////////
app.listen(port, () =>
  console.log(
    `sever running in ${process.env.NODE_ENV} mode on http://localhost:${port}`
  )
);
