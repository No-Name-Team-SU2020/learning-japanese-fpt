const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');
const Teacher_Class = require('../models/Teacher_Class');
const Quiz = require('../models/Quiz');

//view all classes of teacher
router.get('/class', checkAuth, async(req, res) =>{
    try {
        // const {class_id} = req.body;

        const teacher_id = req.body;
        const teacher = await Teacher.findByPk(teacher_id);

        const classes = await Teacher_Class.findAll({
            where: {teacher},
            attributes: ['class_id', 'teacher_id'],
            include: [
                {model: Teacher, through: {attributes: ['teacher_name']}},
                {model: Class, through: {attributes: ['class_name']}}
            ]
        });

        return res.json({
            message: "Classes found!",
            data: classes
        })


    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create quiz
router.post('/quiz', checkAuth, async(req, res) => {
    try {
        const { quiz_name, number_of_question, end_time} = req.body;

        if(!quiz_name) {
            return res.status(301).json({
                message: "quiz name is not valid",
                data: null,
            });
        }

        if(!number_of_question) {
            return res.status(301).json({
                message: "number of question is not valid",
                data: null,
            });
        }

        if(!end_time) {
            return res.status(301).json({
                message: "end time is not valid",
                data: null,
            });
        }

        const newQuiz = await Quiz.create({
            quiz_name,
             number_of_question,
             end_time,
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
router.put('/quiz', checkAuth, async(req, res) => {
    try {
        const { quiz_name, number_of_question, end_time} = req.body;

        if(!quiz_name) {
            return res.status(301).json({
                message: "quiz name is not valid",
                data: null,
            });
        }

        if(!number_of_question) {
            return res.status(301).json({
                message: "number of question is not valid",
                data: null,
            });
        }

        if(!end_time) {
            return res.status(301).json({
                message: "end time is not valid",
                data: null,
            });
        }

        const updateQuiz = await Quiz.update({
            quiz_name,
             number_of_question,
             end_time,
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
router.delete('/quiz', checkAuth, async(req, res) => {
    try {
        const { id } = req.body;

        const deleteQuiz = await Quiz.destroy({
            where: {
                quiz_id: id
            }
        });

        if(!deleteQuiz) {
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

module.exports = router