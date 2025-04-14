const express = require('express');
const Connect = require('./conf/connection.js');
const cors = require('cors');
const db = new Connect();

const app = express();
const port = process.env.PORT || 3000;

//middlewares   
app.use(cors());
app.use(express.json());

//routes imports
const productRoute = require('./routes/productRoute.js');
const authRoutes = require('./routes/authRoutes.js');

// api routes
app.use('/products', productRoute);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});