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

router.get('', (request, response) => {
    response.send(groceryList);
});

// Return a single item
router.get('/:item', (request, response) => {
    const {item} = request.params;
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