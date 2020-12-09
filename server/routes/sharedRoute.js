const router = require('express').Router();
const Subject = require('../models/Subject');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const sequelize = require('sequelize');
const User = require('../models/User');
const Student = require('../models/Student');
const Is_Attended = require('../models/Is_Attended');
const checkAuth = require('../middleware/checkAuth');

//view all lesson in a subject
router.get('/subjects/:subjectId/lessons', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        const lessons = await Lesson.findAll({
            where: {
                subject_id: subjectId
            },
            attributes: ['lesson_id', 'lesson_content', 'lesson_name']
        });

        if (!lessons) {
            return res.json({
                message: "Something wrong",
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
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view lesson by lesson id
router.get('/lessons/:lessonId', checkAuth, async (req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const findLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        });

        if (!findLesson) {
            return res.json({
                message: "Lesson not found"
            })
        }

        return res.json({
            message: "lesson found",
            data: findLesson
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all question by lesson for admin and do quiz for student
router.get('/lessons/:lessonId/questions', checkAuth, async (req, res) => {
    try {

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        const currentStudent = await Student.findOne({
            where: {
                user_name: currentUser.user_name
            }
        });

        const lessonId = req.params.lessonId;
        let listQuestions;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            },
            attributes: ['lesson_id', 'lesson_name']
        });

        if (!currentLesson) {
            return res.json({
                message: "lesson not found"
            });
        }

        //check diem danh danh cho student
        const checkAttendance = await Is_Attended.findOne({
            where: {
                student_id: currentStudent.student_id,
                lesson_id: currentLesson.lesson_id
            }
        })

        if (checkUser.role_id === 1) {
            listQuestions = await Question.findAll({
                where: {
                    lesson_id: currentLesson.lesson_id
                },
                //attributes: ['question_id', 'question_content', 'option_a', 'option_b', 'option_c', 'option_d','subject_id', 'lesson_id', 'correct_answer']
            });

        } else if (checkUser.role_id === 3 && checkAttendance) {
            listQuestions = await Question.findAll({
                order: [
                    sequelize.literal('random()')
                ],
                limit: 10,
                where: {
                    lesson_id: currentLesson.lesson_id
                },
                attributes: ['question_id', 'question_content', 'option_a', 'option_b', 'option_c', 'option_d']
            })
        } else {
            return res.json({
                message: "User dont have permission to view this resource"
            })
        }

        if (!listQuestions) {
            return res.json({
                message: "questions not found",
            });
        }

        return res.json(
            {
                message: "All questions found",
                data: {
                    questions: listQuestions,
                    lesson: currentLesson.lesson_name
                }
            }
        )
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view question by id
router.get('/questions/:questionId', checkAuth, async (req, res) => {
    try {

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        })

        let questionId = req.params.questionId;
        let question;
        let subject;

        if (checkUser.role_id === 1) {
            question = await Question.findOne({
                where: {
                    question_id: questionId
                }
            });

            subject = await Lesson.findOne({
                where: {
                    lesson_id: question.lesson_id
                },
                attributes: ['subject_id']
            });
        } else if (checkUser.role_id === 3) {
            question = await Question.findOne({
                where: {
                    question_id: questionId
                },
                attributes: ['question_id', 'question_content', 'option_a', 'option_b', 'option_c', 'option_d', 'lesson_id']
            });

            subject = await Lesson.findOne({
                where: {
                    lesson_id: question.lesson_id
                },
                attributes: ['subject_id']
            });
        } else {
            return res.json({
                message: "User dont have permission to view this resource"
            })
        }


        if (!question) {
            return res.json({
                message: "Question not found"
            })
        }

        return res.json({
            message: "Question found",
            data: {
                question,
                subject
            }
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

module.exports = router;