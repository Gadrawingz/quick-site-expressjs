// Starting the project real quick
const express = require('express');
const cookieParser = require('cookie-parser')

// Defined routes
const groceriesRoute = require('./routes/groceries')
const mainShopsRoute = require('./routes/shops')

const app = express();
const PORT = 3007;

// Uses of Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});

// Uses: with prefix like.. api/v1/groceries/
app.use('/api/v1/groceries', groceriesRoute);
app.use('/api/v1/shops', mainShopsRoute);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
});