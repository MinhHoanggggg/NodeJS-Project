const res = require("express/lib/response");
const Product = require('../models/Product');
const { mongooseToObject } = require('../../resources/util/mongoose')

class ProductsController {

    //[GET] /products/:slug
    show = (req, res, next) => {

        Product.find({}).lean()
            .then(products => res.render('products', { products }))
            .catch(next);

    }

    productDetail = (req, res, next) => {
        Product.findOne({ slug: req.params.slug }).lean()
            .then(products => {
                res.render('products/productDetail', { products })
            })
            .catch(next);
    }
}


module.exports = new ProductsController;