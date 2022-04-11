const express = require('express');
const app = express();
const port = 6969;
const db = require('./config/conn');
const route = require('./routes');
const cors = require('cors');

//connect db 
db.connect();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

route(app);

app.listen(port, () =>
    console.log(`App listening on port ${port}`));