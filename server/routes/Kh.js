const express = require('express');
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth');
const KH = require('../models/KH');


// router.get('/', verifyToken, async (req, res) => {
// 	try {
// 		const user = await User.findById(req.userId).select('-password')
// 		if (!user)
// 			return res.status(400).json({ success: false, message: 'K tim thay user' })
// 		res.json({ success: true, user })
// 	} catch (error) {
// 		console.log(error)
// 		res.status(500).json({ success: false, message: 'Internal server error' })
// 	}
// })


router.post('/registerKH', async(req,res)=>{
    const {username, phonenumber, email } = req.body
    //Simple validation
    if (!username || !phonenumber)
        return res.status(400).json({ success: false, message: 'Thieu thong tin' })
        try {
            //check for existing user
            const kh = await KH.findOne({phonenumber})
            if (kh)
                return res.status(400).json({ success: false, message: 'Ban da dang ky roi' })
                 //Done
                const newKH = new KH({ username, phonenumber,email })
                await newKH.save()
                //Return token
                const accessToken = jwt.sign({ userId: newKH._id }, process.env.ACESS_TOKEN_SECRET)
                res.json({ success: true, message: 'User created Success', accessToken })
        //  const accessToken = jwt.sign({ KhId: newKH._id })
        
        
        }catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
})
// @route POST api/auth/register
//@desc Register user
//@access Public


module.exports = router