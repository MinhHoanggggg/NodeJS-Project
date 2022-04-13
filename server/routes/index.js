const authRouter = require('./auth');
const postRouter = require('./post');
const KhRouter = require('./Kh');
const CourseRouter = require('./course');

function route(app) {
    app.use('/api/post', postRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/Kh', KhRouter);
    app.use('/api/course', CourseRouter);
}

module.exports = route;