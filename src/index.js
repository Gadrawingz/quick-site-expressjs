// Starting the project real quick
const express = require('express');
const app = express();

const PORT = 3007;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
});

app.get('/employees', (request, response) => {
    const empList = [
        {
            names: 'Peter Tommy',
            salary: 400000
        },
        {
            names: 'Cody Gakpo',
            salary: 5320000
        }, 
    ];
    response.send(empList);
});
