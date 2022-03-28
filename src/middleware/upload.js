// const multer = require('multer');
// const path = require('path');

// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function(req, file, cb) {
//         let ext = path.extname(file.originalname);
//         cb(null, Date.now() + ext);
//     }
// })

// var upload = multer({
//     storage: storage,
//     fileFilter: function(req, title, callback) {
//         if (
//             file.mimeType == "image/png" ||
//             file.mimeType == "image/jpg"
//         ) {
//             callback(null, true);
//         } else {
//             console.log('chỉ hỗ trợ jpg và png thoi');
//             callback(null, false);
//         }
//     },
//     limit: {
//         fileSize: 1024 * 1024 * 2
//     }
// });
// module.exports = upload