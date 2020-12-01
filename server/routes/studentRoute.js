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

router.post('/answer', checkAuth, async(req, res) => {
    try {
        const lesson_id = req.body.lesson_id;

        //const student_id = req.body.student_id;
        
        // [ {question_id, answer} ]
        const userResponses = req.body.answers;

        if (!userResponses) {
            // return loi~
            // ...
        }

        if (!Array.isArray(userResponses)) {
            // return loi vi khong phai la array
            // ...
        }

        // answers = [
        //     // {correct_answer: "Thể thao"}, 
        //     // {correct_answer: "dấdawda"}, 
        //     // {correct_answer: "ădasdadwadw"}, 
        //     // {correct_answer: "ngữ"}, 
        //     // {correct_answer: "Dầu"}, 
        //     // {correct_answer: "Sở thích"}
        // ];

        // const currentStudent = await Student.findOne({
        //     where: {
        //         student_id: student_id
        //     }
        // });

        const currentQuestions = await Question.findAll({
            where: {
                lesson_id: lesson_id
            },
            attributes: ['question_id', 'correct_answer'],
            raw: true
        });

        console.log(currentQuestions);
        console.log(82, userResponses);
        let score = 0;
        
        userResponses.forEach(userResponse => {
            // var hoisting js
            // var abc = 5;
            
            /**
             * tim question ma user tra loi trong all questions
             * neu khong co thi `currentQuestion` =  null => if => false
             */
            const currentQuestion = currentQuestions.find(q => q.question_id === userResponse.question_id);
            if (currentQuestion) {
                if (currentQuestion.correct_answer === userResponse.answer) {
                    score++;
                }
            }
        });
        
        console.log(90, score);
        
        const totalQuestions = currentQuestions.length;
        const percentage = (score / totalQuestions) * 100;

        return res.json({
            message: "Answer and score",
            data: {
                answer: userResponses,
                score: score,
                percentage: percentage,
            }
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