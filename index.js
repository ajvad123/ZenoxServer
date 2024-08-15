const express = require('express');
const cors = require('cors');
const router = require('./Routes/routes');
require('./DB/connection')

const zenoxServer = express();

zenoxServer.use(cors());
zenoxServer.use(express.json());
zenoxServer.use(router);

const port = 4000;

zenoxServer.listen(port, () => {
    console.log(`Server is running at :${port}`);
});

zenoxServer.get('/', (req, res) => {
    res.status(200).send("<h1>Request hits successfully!!</h1>");
});
