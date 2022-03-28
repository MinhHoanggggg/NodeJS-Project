const res = require("express/lib/response");

class UploadController {
    //[GET] /news
    // index(req, res) {
    //     res.render('upload');
    // }

    //add new product
    addProduct = (req, res, next) => {
        let product = new Product({
            productName: req.body.productName,
            price: req.body.price,
            amount: req.body.amount,
            img: req.body.img
        })
        if (req.file) {
            product.img = req.file.path;
        }
        product.save()
            .then(response => {
                res.json({
                        message: 'Thêm sản phẩm thành công!'
                    })
                    .catch(err => {
                        res.json({
                            message: 'Thêm sản phẩm không thành công!'
                        })
                    })
            })
    }
}

module.exports = new UploadController();