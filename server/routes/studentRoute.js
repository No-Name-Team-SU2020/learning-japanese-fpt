const router = require('express').Router();
const sequelize = require('sequelize');
const checkAuth = require('../middleware/checkAuth');
const Student = require('../models/Student');
const Class = require('../models/Class');
const Student_Class = require('../models/Student_Class');
const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const Subject = require('../models/Subject');
const Class_Subject = require('../models/Class_Subject');
const Student_Subject = require('../models/Student_Subject');
const Lesson = require('../models/Lesson');

//view all classes of student
router.get('/student-class', checkAuth, async (req, res) => {
    try {

        const { student_id } = req.body;

        const data = await Student.findAll({
            where: { student_id },
            attributes: ['student_name'],
            include: [
                { model: Class },
            ]
        });

        if (!data) {
            return res.status(301).json({
                message: "Something wrong",
            })
        }

        return res.json({
            message: "classes found",
            data: data
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all subjects of student
router.get('/student-subject', checkAuth, async(req, res) => {
    try {
        const { student_id } = req.body;

        const data = await Student.findAll({
            where: { student_id },
            attributes: ['student_name'],
            include: [
                { model: Subject },
            ]
        });

        if (!data) {
            return res.status(301).json({
                message: "Something wrong",
            })
        }

        return res.json({
            message: "classes found",
            data: data
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//
router.get('/questions/:lessonId', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const questions = await Question.findAll({
            order: [
                sequelize.literal('random()')
            ],
            limit: 2,
            where: {
                lesson_id: lessonId
            },
            attributes: ['question_id', 'question_content', 'option_a', 'option_b', 'option_c', 'option_d']
        });

        return res.status(200).json({
            message: "quiz created successfully",
            data: questions
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

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

//view all question inside a quiz
router.get('/quiz', checkAuth, async(req,res) => {
    try {
        const data = await Quiz.findAll({
            where: { quiz_id },
            include: [
                { model: Question },
            ]
        });

        if (!data) {
            return res.status(301).json({
                message: "Something wrong",
            })
        }

        return res.json({
            message: "classes found",
            data: data
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