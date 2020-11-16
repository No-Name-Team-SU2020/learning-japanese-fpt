const router = require('express').Router();
const Subject = require('../models/Subject');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const checkAuth = require('../middleware/checkAuth');
//const checkRole = require('../middleware/checkRole');

//view all subject for admin
router.get('/subject', checkAuth, async (req, res) => {
    try {
        const subjects = await Subject.findAll();

        if (!subjects) {
            return res.status(301).json({
                message: "Something wrong",
                data: null
            });
        }
        return res.json(
            {
                message: "All subjects found",
                data: subjects
            }
        );
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new subject
router.post('/subject', checkAuth, async (req, res) => {
    try {
        const { subject_id, subject_name } = req.body;

        if (!subject_id) {
            return res.status(301).json({
                message: "subject id is not valid",
                data: null,
            });
        }

        if (!subject_name) {
            return res.status(301).json({
                message: "subject name is not valid",
                data: null,
            });
        }

        const newSubject = await Subject.create({
            subject_id,
            subject_name,
        });

        return res.status(200).json({
            message: 'Subject created successfully',
            data: newSubject
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update subject
router.put('/subject', checkAuth, async (req, res) => {
    try {
        const { subject_id, subject_name } = req.body;

        if (!subject_id) {
            return res.status(404).json({
                message: 'Subject not found',
            });
        }

        const updateSubject = await Subject.update({
            subject_name,
        },
            {
                where: {
                    subject_id: subject_id
                }
            });

        return res.status(200).json({
            message: 'Update successfully',
            data: updateSubject
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete subject
router.delete('/subject', checkAuth, async (req, res) => {
    try {
        const { id } = req.body;

        const deleteSubject = await Subject.destroy({
            where: {
                subject_id: id
            }
        });

        if (!deleteSubject) {
            return res.json({
                message: 'Subject cannot be deleted',
            });
        }

        return res.json({
            message: 'Subject deleted successfully',
            data: deleteSubject
        });

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

//create new lesson
router.post('/lesson', checkAuth, async (req, res) => {
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
router.put('/lesson', checkAuth, async (req, res) => {
    try {
        const { lesson_id, lesson_content, lesson_name } = req.body;

        if (!lesson_id) {
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
                    lesson_id: lesson_id
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
router.delete('/lesson', checkAuth, async (req, res) => {
    try {
        const { id } = req.body;

        const deleteLesson = await Lesson.destroy({
            where: {
                lesson_id: id
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
            });
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