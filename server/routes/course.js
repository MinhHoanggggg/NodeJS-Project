const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Course = require('../models/Course')

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const course = await Course.find({ post: req.params.id })
        res.json({ success: true, course })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Đã xãy ra lỗi rồi đại vương!' })
    }
})

//add
router.post('/add/:id', verifyToken, async (req, res) => { 
    const { title, description } = req.body

    if (!title)
        return res.status(400).json({ success: false, message: 'Title is require' })

    try {
        
        const newCourse = new Course({
            title, 
            description,
            post: req.params.id
        })

        await newCourse.save()
        res.json({ success: true, message: 'Thêm khóa học thành công', course: newCourse })

    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
})

router.put('/update/:id', verifyToken, async (req, res) => {
    const { title, description } = req.body
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is require' })
        
    try {
        
        let updatedCourse = {
            title, 
            description,
        }

        const courseUpdateCondition = { _id: req.params.id }
        updatedCourse = await Course.findOneAndUpdate(courseUpdateCondition, updatedCourse, { new: true })

        if (!updatedCourse)
            return res.status(401).json({ success: false, message: 'Không có Course mà đòi sửa' })

        res.json({ success: true, message: 'Sửa bài học thành công', course: updatedCourse })

    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})


router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {

        const courseDeleteCondition = { _id: req.params.id}
        const deletedCourse = await Course.findOneAndDelete(courseDeleteCondition)

        if (!deletedCourse)
            return res.status(401).json({ success: false, message: 'Không có Course mà đòi xóa' })
        res.json({ success: true, course: deletedCourse })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })

    }
})

module.exports = router

