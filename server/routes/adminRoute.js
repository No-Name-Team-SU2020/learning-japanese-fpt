const router = require('express').Router();
const Subject = require('../models/Subject');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const Class = require('../models/Class');
const { Op } = require('sequelize');
const checkAuth = require('../middleware/checkAuth');

//view all classes
router.get('/classes', checkAuth, async (req, res) => {
    try {
        const classes = await Class.findAll();

        if (!classes) {
            return res.json({
                message: "Classes not found",
            });
        }

        return res.json(
            {
                message: "Classes found",
                data: classes
            }
        );
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view class by id
router.get('/classes/:classId', checkAuth, async (req, res) => {
    try {
        const classId = req.params.classId;

        const findClass = await Class.findOne({
            where: {
                class_id: classId
            }
        });

        if (!findClass) {
            return res.json({
                message: "Class not found"
            })
        }

        return res.json({
            message: "Found class",
            data: findClass
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//Create new class
router.post('/classes', checkAuth, async (req, res) => {
    try {
        const { class_name } = req.body;

        if (!class_name) {
            return res.json({
                message: "Class name is not valid",
                data: null,
            });
        }

        const checkDuplicate = await Class.findOne({
            where: {
                class_name: class_name
            },
        });

        if(checkDuplicate){
            return res.json({
                message: "Class name already existed"
            })
        }

        const newClass = await Class.create({
            class_name,
        });

        return res.json({
            message: 'Class created successfully',
            data: newClass
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//Update class
router.put('/classes/:classId', checkAuth, async (req, res) => {
    try {

        const classId = req.params.classId;

        const currentClass = await Class.findOne({
            where: {
                class_id: classId
            }
        })

        if (!currentClass) {
            return res.json({
                message: 'Class not found',
            });
        }

        const { class_name } = req.body;

        const checkDuplicate = await Class.findOne({
            where: {
                class_name: class_name
            },
        });

        if(checkDuplicate){
            return res.json({
                message: "Class name already existed"
            })
        }

        const updateClass = await Class.update({
            class_name,
        },
            {
                where: {
                    class_id: currentClass.class_id
                }
            });

        return res.json({
            message: 'Update successfully',
            data: updateClass
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete class
router.delete('/classes/:classId', checkAuth, async (req, res) => {
    try {
        const classId = req.params.classId;

        const deleteClass = await Class.destroy({
            where: {
                class_id: classId
            }
        });

        if (!deleteClass) {
            return res.json({
                message: 'Class cannot be deleted',
            });
        }

        return res.json({
            message: 'Class deleted successfully',
            data: deleteClass
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all subject for admin
router.get('/subjects', checkAuth, async (req, res) => {
    try {
        const subjects = await Subject.findAll();

        if (!subjects) {
            return res.json({
                message: "Subjects not found",
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
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view subject by id
router.get('/subjects/:subjectId', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        const findSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            }
        });

        if (!findSubject) {
            return res.json({
                message: "Subject not found"
            })
        }

        return res.json({
            message: "Subject found",
            data: findSubject
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new subject
router.post('/subjects', checkAuth, async (req, res) => {
    try {
        const { subject_code, subject_name } = req.body;

        if (!subject_code) {
            return res.json({
                message: "subject id is not valid",
                data: null,
            });
        }

        if (!subject_name) {
            return res.json({
                message: "subject name is not valid",
                data: null,
            });
        }

        const checkDuplicate = await Subject.findOne({
            where: {
                subject_code: subject_code,
                subject_name: subject_name
            },
        });

        if(checkDuplicate){
            return res.json({
                message: "Subject code and subject name already existed"
            })
        }

        const newSubject = await Subject.create({
            subject_code,
            subject_name,
        });

        return res.json({
            message: 'Subject created successfully',
            data: newSubject
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update subject
router.put('/subjects/:subjectId', checkAuth, async (req, res) => {
    try {

        const subjectId = req.params.subjectId;

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            }
        });

        if(!currentSubject){
            return res.json({
                message: "Subject not found"
            })
        }

        const { subject_code, subject_name } = req.body;

        const checkDuplicate = await Subject.findOne({
            where: {
                subject_code: subject_code,
                subject_name: subject_name
            },
        });

        if(checkDuplicate){
            return res.json({
                message: "Subject code and subject name already existed"
            })
        }

        const updateSubject = await Subject.update({
            subject_code,
            subject_name,
        },
            {
                where: {
                    subject_id: currentSubject.subject_id
                }
            });

        return res.json({
            message: 'Update successfully',
            data: updateSubject
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete subject
router.delete('/subjects/:subjectId', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        const deleteSubject = await Subject.destroy({
            where: {
                subject_id: subjectId
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
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new lesson
router.post('/subjects/:subjectId/lessons', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            },
        });

        if(!currentSubject){
            return res.json({
                message: "Subject not found"
            })
        }

        const { lesson_content, lesson_name } = req.body;

        const checkDuplicate = await Lesson.findOne({
            where: {
                lesson_content: lesson_content,
                lesson_name: lesson_name
            },
        });

        if(checkDuplicate){
            return res.json({
                message: "Lesson content and lesson name already existed"
            })
        }

        if (!lesson_content) {
            return res.json({
                message: "lesson content is not valid",
                data: null,
            });
        }

        if (!lesson_name) {
            return res.json({
                message: "lesson name is not valid",
                data: null,
            });
        }

        const newLesson = await Lesson.create({
            lesson_content,
            lesson_name,
            subject_id: currentSubject.subject_id,
        });

        return res.json({
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
router.put('/lessons/:lessonId', checkAuth, async (req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        })

        if(!currentLesson){
            return res.json({
                message: "Lesson not found"
            })
        }

        const { lesson_content, lesson_name } = req.body;

        const checkDuplicate = await Lesson.findOne({
            where: {
                lesson_content: lesson_content,
                lesson_name: lesson_name
            },
        });

        if(checkDuplicate){
            return res.json({
                message: "Lesson content and lesson name already existed"
            })
        }

        const updateLesson = await Lesson.update({
            lesson_content,
            lesson_name,
        },
            {
                where: {
                    lesson_id: currentLesson.lesson_id
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
router.delete('/lessons/:lessonId', checkAuth, async (req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const deleteLesson = await Lesson.destroy({
            where: {
                lesson_id: lessonId
            }
        });

        if (!deleteLesson) {
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

//view all question by subject
router.get('/subjects/:subjectId/questions', checkAuth, async(req, res) => {
    try {
        const subjectId = req.params.subjectId;

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            },
        });

        if(!currentSubject){
            return res.json({
                message: "Subject not found"
            })
        }

        const listQuestions = await Question.findAll({
            where: {
                subject_id: currentSubject.subject_id
            }
        });

        if(!listQuestions){
            return res.json({
                message: "questions not found"
            })
        }

        return res.json({
            message: "questions found",
            data: listQuestions
        })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new question
router.post('/subjects/:subjectId/lessons/:lessonId/questions', checkAuth, async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        const lessonId = req.params.lessonId;

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: subjectId
            },
        })

        if(!currentSubject){
            return res.json({
                message: "Subject not found"
            })
        }

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId,
                subject_id: currentSubject.subject_id
            },
        });

        if(!currentLesson){
            return res.json({
                message: "Lesson not found"
            })
        }

        const { question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;

        if (!question_content || question_content.length === 0) {
            return res.json({
                message: "question content is not valid",
                data: null,
            });
        }

        if (!option_a || option_a.length === 0) {
            return res.json({
                message: "option A content is not valid",
                data: null,
            });
        }

        if (!option_b || option_b.length === 0) {
            return res.json({
                message: "option B content is not valid",
                data: null,
            });
        }

        if (!option_c || option_c.length === 0) {
            return res.json({
                message: "option C content is not valid",
                data: null,
            });
        }

        if (!option_d || option_d.length === 0) {
            return res.json({
                message: "option D content is not valid",
                data: null,
            });
        }

        if (!correct_answer || correct_answer.length === 0) {
            return res.json({
                message: "correct answer is not valid",
                data: null,
            });
        }

        const newQuestion = await Question.create({
            question_content,
            option_a,
            option_b,
            option_c,
            option_d,
            subject_id: currentSubject.subject_id,
            lesson_id: currentLesson.lesson_id,
            correct_answer,
        });

        return res.json({
            message: 'Question created successfully',
            data: newQuestion
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update question
router.put('/questions/:questionId', checkAuth, async (req, res) => {
    try {
        const questionId = req.params.questionId;

        const currentQuestion = await Question.findOne({
            where: {
                question_id: questionId
            }
        });

        if(!currentQuestion){
            return res.json({
                message: 'Question not found',
            });
        }

        const { question_content, option_a, option_b, option_c, option_d, correct_answer } = req.body;

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
                    question_id: currentQuestion.question_id
                }
            });

        return res.json({
            message: 'Update successfully',
            data: updateQuestion
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete question
router.delete('/questions/:questionId', checkAuth, async (req, res) => {
    try {
        const questionId = req.params.questionId;

        const deleteQuestion = await Question.destroy({
            where: {
                question_id: questionId
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
        return res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//search for question
router.get('/search', checkAuth, async (req, res) => {
    try {
        const { input } = req.query;

        const questions = await Question.findAll({
            where: {
                question_content: {
                    [Op.like]: '%' + input + '%'
                }
            }
        });

        if (!questions || questions.length === 0) {
            return res.json("No question founded");
        }
        return res.json({
            message: "Found question",
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