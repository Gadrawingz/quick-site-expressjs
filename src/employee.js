// Starting the project real quick
const express = require('express');
const req = require('express/lib/request');
const app = express();

const PORT = 3007;

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
});

const empList = [
    {
        names: 'Ashley Cole',
        salary: 4550000
    },
    {
        names: 'Cody Gakpo',
        salary: 5320000
    }, 
    {
        names: 'Dwayne Johnson',
        salary: 750000
    },
    {
        names: 'Bruno Fernandez',
        salary: 200000
    },
];

app.get('/employees', (request, response) => {
    response.send(empList);
});

// POST Request: Creating a new resource
app.post('/employees', (request, response) => {
    console.log(request.body);
    empList.push(request.body)
    response.send(201); // Created
})

// 05. Dealing with Router parameters
// Return a single item
app.get('/employees/:ename', (request, response) => {
    // What's passed here will appear in terminal
    // console.log(request.params.employee); // Peter
    const {ename} = request.params;
    const myEmployee = empList.find((p) => p.ename === ename);
    console.log(request.params.ename);
    response.send(myEmployee);  
})