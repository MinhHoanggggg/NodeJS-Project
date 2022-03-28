const res = require("express/lib/response");
const Product = require("../models/Product");

class SiteController {
    //[GET] /news
    index(req, res, next) {
        Product.find({})
            .then(products => res.render('home', {
                products
            }))
            .catch(next);

        // res.render('home');
    }

    //[GET] /login
    login(req, res) {
        res.render('login');
    };

    //[GET] /register
    register(req, res) {
        res.render('register');
    };


}

module.exports = new SiteController;