const express = require('express');
const Connect = require('./conf/connection.js');
const cors = require('cors');
const db = new Connect();

const app = express();
const port = process.env.PORT || 3000;

//routes imports
const productRoute = require('./routes/productRoute.js');

// api routes
app.use('/products', productRoute);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});