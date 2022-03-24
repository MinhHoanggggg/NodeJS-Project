const res = require("express/lib/response");

class SiteController {
    //[GET] /news
    index(req, res) {
        res.render('home');
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