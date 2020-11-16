const router = require('express').Router();
const Lesson = require('../models/Lesson');
const checkAuth = require('../middleware/checkAuth');

//view all lesson in a subject
router.get('/lesson', checkAuth, async (req, res) => {
    try {
        const { id } = req.body;

        const lessons = await Lesson.findAll({
            where: {
                subject_id: id
            },
            attributes: ['lesson_id', 'lesson_content', 'lesson_name']
        });

        if (!lessons) {
            return res.status(301).json({
                message: "Something wrong",
                data: null
            });
        }

        return res.json(
            {
                message: "Lessons found",
                data: lessons
            }
        )

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new lesson
router.post('/lesson', checkAuth, async(req, res) => {
    try {
        const { id } = req.body;

        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update lesson
router.put('/lesson', checkAuth, async(req, res) => {
    try {
        const
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete lesson
router.delete('/lesson', checkAuth, async(req, res) => {
    try {
        const
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

module.exports = router;