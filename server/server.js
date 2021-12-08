const express = require('express');
const server = express();
const cors =require('cors');
server.use(cors());
//Initialise the port
const port = 3000;
//Import the data
const data = require('./data');
const searchResults = data.searchResults;
const resultsInformation = data.resultsInformation;
//Show the list of possible results
server.get('/', (req,res) =>{
    res.send(searchResults);
});
//Show facts about a random result
server.get('/random',(req,res) => {
    res.send(resultsInformation[Math.floor(Math.random()*searchResults.length)]);
});

//Run server
server.listen(port, () => {
    console.log(`Go to http://localhost:${port}`)
})