const router = require('express').Router();
const moment = require('moment');
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');
const Quiz = require('../models/Quiz');
const Subject = require('../models/Subject');
const Lesson = require('../models/Lesson');

//view all quiz
router.get('/quiz', checkAuth, async (req, res) => {
    try {
        const { id } = req.body;

        const quizzes = await Quiz.findAll({
            where: {
                class_id: id
            }
        });

        if (!quizzes) {
            return res.status(301).json({
                message: "Something wrong"
            });
        }

        return res.status(200).json({
            message: "Found all quizzes",
            data: quizzes
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create quiz
router.post('/quiz', checkAuth, async (req, res) => {
    try {

        const { id } = req.body;

        const currentClass = await Class.findOne({
            where: {
                class_id: id
            },
            attributes: ['class_id']
        });

        const { quiz_name, number_of_question, start_time, end_time } = req.body;

        if (!quiz_name) {
            return res.status(301).json({
                message: "quiz name is not valid",
                data: null,
            });
        }

        if (!number_of_question || isNaN(Number(number_of_question)) || Number(number_of_question) < 0) {
            return res.status(301).json({
                message: "number of question is not valid",
                data: null,
            });
        }

        if(start_time) {
            const parsed = moment(String(create_at), 'x')
            if(!parsed.isValid()){
                return res.status(301).json({
                    message: "start time is not valid",
                    data: null,
                });
            }
        }

        if (end_time) {
            const momentEndTime = moment(String(end_time), 'x');
            if(!momentEndTime.isValid()) {
                return res.status(301).json({
                    message: "start time is not valid",
                    data: null,
                });
            }

            if(start_time) {
                const momentStartTime = moment(String(start_time), 'x');
                if(momentStartTime.isBefore(momentStartTime)) {
                    return res.status(301).json({
                        message: "end time cannot happen before start time",
                        data: null,
                    });
                }
            }
        }

        const newQuiz = await Quiz.create({
            quiz_name,
            number_of_question,
            create_at,
            end_time,
            class_id: currentClass,
        });

        return res.status(200).json({
            message: 'Quiz created successfully',
            data: newQuiz
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update quiz
router.put('/quiz/:quizId', checkAuth, async (req, res) => {
    try {
        const quizId = req.params.quizId;

        const { quiz_name, number_of_question, end_time } = req.body;

        const updateQuiz = await Quiz.update({
            quiz_name,
            number_of_question,
            end_time,
        },
            {
                where: {
                    quiz_id: quizId
                }
            });

        return res.status(200).json({
            message: 'Update successfully',
            data: updateQuiz
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete quiz
router.delete('/quiz/:quizId', checkAuth, async (req, res) => {
    try {
        const quizId = req.params.quizId;

        const deleteQuiz = await Quiz.destroy({
            where: {
                quiz_id: quizId
            }
        });

        if (!deleteQuiz) {
            return res.json({
                message: 'Quiz cannot deleted',
            });
        }

        return res.json({
            message: 'Quiz deleted successfully',
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