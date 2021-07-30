const express = require('express');
const routes = require('./routes');
const bodyParser = require('./bodyParser');

const app = express();
const port = 3000;

bodyParser(app);
routes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})