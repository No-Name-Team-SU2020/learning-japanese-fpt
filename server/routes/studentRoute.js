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

//view all subjects of a student
router.get('/student-subjects/:studentId', checkAuth, async(req, res) => {
    try {
        const studentId = req.params.studentId;

        const data = await Student.findAll({
            where: { student_id: studentId },
            attributes: ['student_id','student_name'],
            include: [
                { model: Subject, through: {attributes: []} },
            ]
        });

        if (!data) {
            return res.json({
                message: "Something wrong",
            })
        }

        return res.json({
            message: "subjects found",
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

//testing
router.get('/questions/:lessonId', checkAuth, async(req, res) => {
    try {
        // const lessonId = req.params.lessonId;
        // const hashAnswer = {
        //     1: 'B',
        //     2: 'C'
        // }

        // const question = DB...Class..;
        // const answer = question.answer; // answer = c

        // question[answer] => question.c


        // const toDB = JSON.stringify(hashAnswer);
        // const toHash = JSON.parse()

        const questions = await Question.findAll({
            order: [
                sequelize.literal('random()')
            ],
            limit: 10,
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

module.exports = router;