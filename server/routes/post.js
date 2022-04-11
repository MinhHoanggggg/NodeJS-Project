// const {verify} = require('argon2')
const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Post = require('../models/Post')


//@route GET api/posts
//@desc GET Post
// @access Private
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

//@route POST api/posts
//@desc Create Post
// @access Private

router.post('/', verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body

    //Simple validation
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is require' })
    try {
        //check url co bat dau = https khong, neu co thi lay luon url do, nguoc lai se tu them
        const newPost = new Post({
            title, description, url: (url.startsWith('https://')) ? url : `https://${url}`,
            status: status || 'TỰ TẬP',
            user: req.userId
            
        })
        await newPost.save()
        res.json({ success: true, message: 'Thêm khóa tập thành công', post: newPost })



    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
})
//@route PUT api/posts
//@desc UPDATE Post
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is require' })
    try {
        //check url co bat dau = https khong, neu co thi lay luon url do, nguoc lai se tu them
        let updatedPost = {
            title,
            description: description || '',
            url: ((url.startsWith('https://')) ? url : `https://${url}`) || '',
            status: status || 'GYM KÈM  PT'
        }

        const postUpdateCondition = { _id: req.params.id, user: req.userId }
        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true })
        //user not authorised to update post or post not found

        if (!updatedPost)
            return res.status(401).json({ success: false, message: 'Post k tim thay hoac user not authorrised' })

        res.json({ success: true, message: 'Done progess', post: updatedPost })



    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
})
//@route DELETE api/posts
//@desc DELETE Post
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
    try {
       
     
        const postDeleteCondition = { _id: req.params.id}
        const deletedPost = await Post.findOneAndDelete(postDeleteCondition)

        //User not authorised or post not found 
        if (!deletedPost)
            return res.status(401).json({ success: false, message: 'Post k tim thay hoac user not authorrised' })
        res.json({ success: true, post: deletedPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
})

module.exports = router

