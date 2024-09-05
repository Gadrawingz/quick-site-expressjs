// Define variable stuffs
const { Router } = require('express');
const router = Router(); 

const groceryList = [
    {
        item: 'Milk',
        price: 5000
    },
    {
        item: 'Potato',
        price: 5400
    }, 
    {
        item: 'Mango',
        price: 6500
    },
];


// 7th Dealing With Cookies
router.get('/', (request, response) => {
    // Cookies that have not been signed
    console.log('Not Signed cookes: ', request.cookies);
    // Cookies that have been signed
    console.log('Signed cookies: ', request.signedCookies);
    
    // response.cookie('visited', true); // basic
    response.cookie('visited', true, {
        maxAge: 6000, // expiration time in milliseconds
    });
    response.send(groceryList);
})

// Return a single item
router.get('/:item', (request, response) => {
    console.log(request.cookies);
    const { item } = request.params;
    const groceryItem = groceryList.find((g) => g.item === item);
    response.send(groceryItem); // GET:/api/v1/groceries/Potato 
})


// POST Request: Add new grocery item using post method
router.post('', (request, response) => {
    console.log(request.body);
    groceryList.push(request.body)
    response.send(201);
})

// Export stuff:
module.exports = router;