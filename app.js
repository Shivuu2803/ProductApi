require("dotenv").config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');

app.use(express.json());

const products_routes = require('./routes/products');

app.get('/', (req, res) => {
  res.json("Lets build an api now!!!");
})

app.use('/api/products', products_routes);


PORT = 3000;
app.listen(PORT, async () => {
  await connectDB(process.env.MONGODB_URL);
  console.log("Connected to port:" + PORT);
});
