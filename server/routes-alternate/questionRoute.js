const router = require('express').Router();
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const checkAuth = require('../middleware/checkAuth');

//view all question in a lesson
router.get('/question', checkAuth, async (req, res) => {
    try {
        const { id } = req.body;

        const questions = await Question.findAll({
            where: {
                lesson_id: id
            },
            attributes: ['question_content', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_answer']
        });

        if (!questions) {
            return res.status(301).json({
                message: "Something wrong",
                data: null
            });
        }
        return res.json(
            {
                message: "All questions found",
                data: questions
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

//create new question
router.post('/question', checkAuth, async (req, res) => {
    try {
        const { id } = req.body;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: id
            },
            attributes: ['lesson_id']
        });

        const { question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;

        if (!question_content || question_content.length === 0) {
            return res.status(301).json({
                message: "question content is not valid",
                data: null,
            });
        }

        if (!option_a || option_a.length === 0) {
            return res.status(301).json({
                message: "option A content is not valid",
                data: null,
            });
        }

        if (!option_b || option_b.length === 0) {
            return res.status(301).json({
                message: "option B content is not valid",
                data: null,
            });
        }

        if (!option_c || option_c.length === 0) {
            return res.status(301).json({
                message: "option C content is not valid",
                data: null,
            });
        }

        if (!option_d || option_d.length === 0) {
            return res.status(301).json({
                message: "option D content is not valid",
                data: null,
            });
        }

        if (!correct_answer || correct_answer.length === 0) {
            return res.status(301).json({
                message: "correct answer is not valid",
                data: null,
            });
        }

        const newQuestion = await Question.create({
            //question_id,
            question_content,
            option_a,
            option_b,
            option_c,
            option_d,
            lesson_id: currentLesson.lesson_id,
            correct_answer,
        });

        return res.status(200).json({
            message: 'Question created successfully',
            data: newQuestion
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update question
router.put('/question', checkAuth, async (req, res) => {
    try {
        //const questionId = req.params;

        const { questionId, question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;

        if (!questionId) {
            return res.status(404).json({
                message: 'Question not found',
            })
        }

        const updateQuestion = await Question.update({
            question_content,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
        },
            {
                where: {
                    question_id: questionId
                }
            });

        return res.status(200).json({
            message: 'Update successfully',
            data: updateQuestion
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete question
router.delete('/question', checkAuth, async (req, res) => {
    try {
        const { id } = req.body;

        const deleteQuestion = await Question.destroy({
            where: {
                question_id: id
            }
        });

        if (!deleteQuestion) {
            return res.json({
                message: 'Question cannot be deleted',
            });
        }

        return res.json({
            message: 'Question deleted successfully',
            data: deleteQuestion
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