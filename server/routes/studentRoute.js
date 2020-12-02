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
const User = require('../models/User');
const Quiz_Result = require('../models/Quiz_Result');

//view all subjects of a student
router.get('/student-subjects', checkAuth, async(req, res) => {
    try {

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        const currentStudent = await Student.findOne({
            where: {
                user_name: checkUser.user_name
            },
            attributes: ['student_id']
        });

        const data = await Student.findAll({
            where: { student_id: currentStudent.student_id },
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

router.post('/lessons/:lessonId/answer', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            },
            attributes: ['lesson_id']
        });

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        const currentStudent = await Student.findOne({
            where: {
                user_name: checkUser.user_name
            },
            attributes: ['student_id']
        });
        
        // [ {question_id, answer} ]
        const userResponses = req.body.answers;

        if (!userResponses) {
            // return loi
            // ...
            return res.json({
                message: "user response is not valid"
            })
        }

        if (!Array.isArray(userResponses)) {
            // return loi vi khong phai la array
            return res.json({
                message: "user response is not an array"
            })
        }

        const currentQuestions = await Question.findAll({
            where: {
                lesson_id: currentLesson.lesson_id
            },
            attributes: ['question_id', 'correct_answer', 'lesson_id'],
            raw: true
        });

        //console.log(currentQuestions);
        //console.log(82, userResponses);

        let score = 0;
        userResponses.forEach(userResponse => {
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
        
        //console.log(90, score);
        
        const totalQuestions = currentQuestions.length;
        const percentage = (score / totalQuestions) * 100;

        const resultToDb = await Quiz_Result.create({
            student_id: currentStudent.student_id,
            lesson_id: currentLesson.lesson_id,
            score: score,
            percentage: percentage
        });

        return res.json({
            message: "Answer and score",
            data: {
                answer: userResponses,
                score: resultToDb
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