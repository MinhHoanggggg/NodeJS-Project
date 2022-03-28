const newsRouter = require('./news');
const siteRouter = require('./site');
const cartRouter = require('./cart');

// const uploadRouter = require('./upload');
const productsRouter = require('./products');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/cart', cartRouter);
    app.use('/products', productsRouter);
    // app.use('/upload', uploadRouter);
    app.use('/', siteRouter);

}

module.exports = route;