const express = require('express');
const app = express();
const port = 3001;
const handlebars = require('express-handlebars');
const path = require('path');


app.use(express.static(path.join(__dirname, 'resources/public')));

//Template engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/detail-product', (req, res) => {
    res.render('detail-product');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));