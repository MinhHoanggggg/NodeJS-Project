const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');
const User = require('../models/User');

//check login user
router.get('/', verifyToken, async(req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user)
            return res.status(400).json({ success: false, message: 'User không tồn tại' })
        res.json({ success: true, user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Server sập cmnr' })
    }
})

router.post('/register', async(req, res) => {
    const { username, password, roleid } = req.body

    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu trống' })

    try {

        const user = await User.findOne({ username })

        if (user)
            return res
                .status(400)
                .json({ success: false, message: 'Tên đăng nhập đã tồn tại' })

        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword, roleid: 0 })
        await newUser.save()

        // nhả token
        const accessToken = jwt.sign({ userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET
        )

        res.json({
            success: true,
            message: 'Tạo tài khoản thành công',
            accessToken,
            roleid
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Không ổn rồi đại vương, đã xảy ra lỗi!' })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res.status(400).json({ success: false, message: 'Missing username or  password' })
    try {

        const user = await User.findOne({ username })
        if (!user)
            return res.status(400).json({ success: false, message: 'Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại' })

        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
            return res.status(400).json({ success: false, message: 'Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại' })

        const accessToken = jwt.sign({ userId: user._id, roleid: user.roleid }, process.env.ACCESS_TOKEN_SECRET)
        res.json({ success: true, message: 'Login thanh cong', accessToken, roleid: user.roleid })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
}

)
module.exports = router