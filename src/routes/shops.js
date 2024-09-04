// Desining basic variables
const { Router } = require("express");
const router = Router();

// It is going to happen here
const definedShops = [
  { id: 1, shopName: "eBay", stars: 2.4 },
  { id: 2, shopName: "Etsy", stars: 4.8 },
  { id: 3, shopName: "Amazon", stars: 4.5 },
  { id: 4, shopName: "eGuriro", stars: 3.5 },
  { id: 5, shopName: "Kikuu", stars: 1.0 },
  { id: 6, shopName: "Unknown", stars: 4.5 },
];

router.get('', (req, res) => {
    // E7: QUERY PARAMETERS:
    // If i go like ...api/v1/shops?stars=4.5&sortBy=DESC
    // I can add as many parameters as I want...
    // then: console.log(req.query): { stars:'4.5', sortBy:'DESC'}

    const { stars } = req.query;
    const parsedStars = parseInt(stars);
    if(!isNaN(parsedStars)) {
        const filteredShops = definedShops.filter((s) => s.stars <= parsedStars);
        // Here, return filtered shops based on q. parameters
        res.send(filteredShops);
    } else {
        // Else: return all the supermarkets;
        res.send(definedShops);
    }
});

// Export the shit
module.exports = router;
