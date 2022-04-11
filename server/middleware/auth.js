//file nay kiem tra access token 
// Authorization : Bearer + Token (h phai xoa Bearer de lay token)

const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    //&& : neu k co authHeader thi no se la authHeader o tren, neu co thi no la authHeader sau &&
    const token = authHeader && authHeader.split(' ')[1]
    if (!token)
        return res.status(401).json({ success: false, message: 'Access token not found11 hehe' })

    try {
        const decoded = jwt.verify(token, process.env.ACESS_TOKEN_SECRET)
        console.log(decoded);
        req.roleid = decoded.roleid
        req.userId = decoded.userId
        next()
        //AccessToken = object userId ben file auth.js
        //Sau khi token dc cho qua, thi file post cho phep gan' token vao Post de request

    } catch (error) {
        console.log(error)
        return res.status(403).json({ success: false, message: 'Token sai rui' })

    }

}
module.exports = verifyToken