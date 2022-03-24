const res = require("express/lib/response");

class CartController {
    //[GET] /news
    cartIndex(req, res) {
        res.render('cart');
    }
}

module.exports = new CartController;