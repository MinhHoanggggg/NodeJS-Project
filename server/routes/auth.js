const express = require('express');
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User');
const verifyToken = require('../middleware/auth');

// @route GET api/auth
//@desc check xem user dang nhap hay chua
//@access Public

router.get('/', verifyToken, async (req, res) => {
	try {
		const user = await User.findById(req.userId).select('-password')
		if (!user)
			return res.status(400).json({ success: false, message: 'K tim thay user' })
		res.json({ success: true, user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})


// @route POST api/auth/register
//@desc Register user
//@access Public

router.post('/register', async (req, res) => {
	const { username, password, roleid } = req.body

	// Simple validation
	if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		// Check for existing user
		const user = await User.findOne({ username })

		if (user)
			return res
				.status(400)
				.json({ success: false, message: 'Username already taken' })

		// All good
		const hashedPassword = await argon2.hash(password)
		const newUser = new User({ username, password: hashedPassword, roleid})
		await newUser.save()

		// Return token
		 const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACESS_TOKEN_SECRET)
                res.json({ success: true, message: 'User created Success', accessToken, roleid})
		
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error hihijjj' })
	}
})



router.post('/login', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res.status(400).json({ success: false, message: 'Missing username or  password' })
    try {
        //check for existing user
        const user = await User.findOne({ username })
        if (!user)
            return res.status(400).json({ success: false, message: 'Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại' })
        //Username found
        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
            return res.status(400).json({ success: false, message: 'Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại' })

        //Pass valid 
        const accessToken = jwt.sign({ userId: user._id, roleid: user.roleid }, process.env.ACESS_TOKEN_SECRET)
        res.json({ success: true, message: 'Login thanh cong', accessToken, roleid: user.roleid === "1" ? true : false })


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
}
)
module.exports = router