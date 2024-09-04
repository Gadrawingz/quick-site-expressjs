// Starting the project real quick
const express = require('express');
const groceriesRoute = require('./routes/groceries')

const app = express();
const PORT = 3007;

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});

// Use it
app.use(groceriesRoute);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
});

  