// Desining basic variables
const { Router } = require('express')
const router = Router();

// It is going to happen here
const definedShops = [
    { shopName: "eBay", stars: 2.4},
    { shopName: "Etsy", stars: 4.8},
    { shopName: "Amazon", stars: 4.1},
    { shopName: "eGuriro", stars: 3.5},
]

router.get('', (req, res) => {
    res.send(definedShops)
}) 

// Export the shit
module.exports = router;