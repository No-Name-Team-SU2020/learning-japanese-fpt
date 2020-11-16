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

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: id
            },
            attributes: ['subject_id']
        });

        const { lesson_id, lesson_content, lesson_name } = req.body;

        if (!lesson_id) {
            return res.status(301).json({
                message: "lesson id is not valid",
                data: null,
            });
        }

        if (!lesson_content) {
            return res.status(301).json({
                message: "lesson content is not valid",
                data: null,
            });
        }

        if (!lesson_name) {
            return res.status(301).json({
                message: "lesson name is not valid",
                data: null,
            });
        }

        const newLesson = await Lesson.create({
            lesson_id,
            lesson_content,
            lesson_name,
            subject_id: currentSubject.subject_id,
        });

        return res.status(200).json({
            message: 'Lesson created successfully',
            data: newLesson
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update lesson
router.put('/lesson/:lessonId', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const { lesson_content, lesson_name } = req.body;

        if (!lessonId) {
            return res.status(404).json({
                message: 'Lesson not found',
            });
        }

        const updateLesson = await Lesson.update({
            lesson_content,
            lesson_name,
        },
            {
                where: {
                    lesson_id: lessonId
                }
            });

        return res.status(200).json({
            message: 'Update successfully',
            data: updateLesson
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete lesson
router.delete('/lesson/:lessonId', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const deleteLesson = await Lesson.destroy({
            where: {
                lesson_id: lessonId
            }
        });

        if(!deleteLesson){
            return res.json({
                message: 'Lesson cannot be deleted',
            });
        }

        return res.json({
            message: 'Lesson deleted successfully',
            data: deleteLesson
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

module.exports = router;