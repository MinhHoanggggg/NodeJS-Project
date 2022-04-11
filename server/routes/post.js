const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post')
const Course = require('../models/Course')

router.get('/', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId }).populate('user', ['username'])
        console.log(req.roleid);
        res.json({ success: true, posts })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal error server 12' })
    }

})

router.get('/getAll', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({  })
        res.json({ success: true, posts })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal error server 11 hehe' })
    }

})

router.get('/getCourse', verifyToken, async (req, res) => {
    try {

        const course = await Course.find({ post: req._id})
        res.json({ success: true, course })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal error server 12' })
    }

})

//add
router.post('/add', verifyToken, async (req, res) => { 
    const { title, description, status } = req.body

    if (!title)
        return res.status(400).json({ success: false, message: 'Title is require' })

    try {
        
        const newPost = new Post({
            title, 
            description,
            status,
            user: req.userId
        })

        await newPost.save()
        res.json({ success: true, message: 'Thêm khóa học thành công', post: newPost })

    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
})

router.put('/update:id', verifyToken, async (req, res) => {
    const { title, description, status } = req.body
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is require' })
    try {
        
        let updatedPost = {
            title, 
            description,
            status
        }

        const postUpdateCondition = { _id: req.params.id, user: req.userId }
        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true })

        if (!updatedPost)
            return res.status(401).json({ success: false, message: 'Post k tim thay hoac user not authorrised' })

        res.json({ success: true, message: 'Done progess', post: updatedPost })

    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

router.delete('/delete:id', verifyToken, async (req, res) => {
    try {

        const postDeleteCondition = { _id: req.params.id}
        const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

        if (!deletedPost)
            return res.status(401).json({ success: false, message: 'Post k tim thay hoac user not authorrised' })
        res.json({ success: true, post: deletedPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
})

module.exports = router

