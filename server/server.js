const express = require('express');
const server = express();
server.use(cors());

//Initialise the port
const port = 3000;





//Run server
server.listen(port, () => {
    console.log(`Go to http://localhost:${port}`)
})