const authRouter = require('./auth');
const postRouter = require('./post');
const KhRouter = require('./Kh');

function route(app) {
    app.use('/api/post', postRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/Kh', KhRouter);
}

module.exports = route;