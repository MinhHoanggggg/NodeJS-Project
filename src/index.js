const express = require('express');
const app = express();
const port = 6969;
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');


//connect db 
db.connect();

app.use(express.static(path.join(__dirname, 'resources', 'public')));

//Template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () =>
    console.log(`Example app listening on port ${port}`));