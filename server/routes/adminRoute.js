const router = require('express').Router();
const Subject = require('../models/Subject');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const checkAuth = require('../middleware/checkAuth');
const checkRole = require('../middleware/checkRole');

//view all subject for admin
router.get('/subject', checkAuth, async(req, res) => {
    try {
        const subjects = await Subject.findAll();

        if(!subjects){
            res.status(404).send("Something wrong");
        }
        else{
            return res.json(
                {
                    message: "All subjects found",
                    data: subjects
                }
            );
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//view all lesson in a subject
router.get('/lesson', checkAuth, async(req,res) => {
    try {
        const { id } = req.body;

        const lessons = await Lesson.findAll({
            where: {
                subject_id: id
            },
            attributes: ['lesson_id', 'lesson_content', 'lesson_name']
        });

        if(!lessons){
            res.status(404).send("Something wrong");
        }
        else{
            return res.json(
                {
                    message: "Lessons found",
                    data: lessons
                }
            )
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//view all question in a lesson
router.get('/question', checkAuth, async(req, res) => {
    try {
        const { id } = req.body;

        const questions = await Question.findAll({
            where: {
                lesson_id: id
            },
            attributes: ['question_content', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_answer']
        });

        if(!questions){
            res.status(404).send("Something wrong");
        }
        else{
            return res.json(
                {
                    message: "All questions found",
                    data: questions
                }
            )
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//create new question
router.post('/question', checkAuth, async(req, res) => {
    try {
        const { id } = req.body;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: id
            },
            attributes: ['lesson_id']
        });
    
        const { question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;
    
        const newQuestion = await Question.create({
            question_content,
            option_a,
            option_b,
            option_c,
            option_d,
            //lesson_id: currentLesson,
            correct_answer,
        });

        return res.status(200).json({
            message: 'Question created successfully',
            data: newQuestion
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//update question
router.put('/question', checkAuth, async(req, res) => {
    try {
        const { id, question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;

        // const findQuestion = await Question.findOne({
        //     where: {
        //         question_id: id
        //     }
        // });

        // if(!findQuestion){
        //     return res.status(404).json({
        //         message: 'Question not found',
        //     })
        // }

        const updateQuestion = await Question.update({
            question_content,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
            where: {
                question_id: id
            }
        });

        return res.status(200).json({
            message: 'Update successfully',
            data: updateQuestion
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//delete question
router.delete('/question', checkAuth, async(req, res) => {
    try {
        const { id } = req.body;

        const deleteQuestion = await Question.destroy({
            where: {
                question_id: id
            }
        });

        if(!deleteQuestion) {
            return res.json({
                message: 'Question cannot deleted',
            });
        }

        return res.json({
            message: 'Question deleted successfully',
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;