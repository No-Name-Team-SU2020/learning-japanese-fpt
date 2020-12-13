const router = require('express').Router();
const sequelize = require('sequelize');
const checkAuth = require('../middleware/checkAuth');
const Student = require('../models/Student');
const Class = require('../models/Class');
const Question = require('../models/Question');
const Subject = require('../models/Subject');
const Lesson = require('../models/Lesson');
const User = require('../models/User');
const Quiz_Result = require('../models/Quiz_Result');
const Grammar = require('../models/Grammar');
const Is_Attended = require('../models/Is_Attended');
const Class_Subject = require('../models/Class_Subject');
const Student_Subject = require('../models/Student_Subject');
const Student_Class = require('../models/Student_Class');

//view all class of a student
router.get('/student-classes', checkAuth, async(req, res) => {
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
                { model: Class, through: {attributes: []} },
            ]
        });

        if (!data) {
            return res.json({
                message: "Data not found",
            })
        }

        return res.json({
            message: "Classes found",
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

//chấm điểm cho sinh viên rồi lưu kết quả vào db
router.post('/answer/:lessonId', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            },
            attributes: ['lesson_id', 'lesson_name', 'subject_id']
        });

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: currentLesson.subject_id
            },
            attributes: ['subject_code']
        })

        //lấy ra student đang đăng nhập hiện tại
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
        
        const totalQuestions = userResponses.length;
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
                answers: userResponses,
                score: resultToDb,
                subject: currentSubject.subject_code,
                lesson: currentLesson.lesson_name
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

//view all quiz result of a student
router.get('/quiz_results', checkAuth, async(req, res) => {
    try {
        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });
        //check student
        const currentStudent = await Student.findOne({
            where: {
                user_name: checkUser.user_name
            },
        });

        const results = await Quiz_Result.findAll({
            where: {
                student_id: currentStudent.student_id
            },
            include: [
                { model: Lesson } 
            ],
        });

        if(!results){
            return res.json({
                message: "Quiz results not found"
            });
        }

        return res.json({
            message: "Found all quiz result of student", 
            data: {
                results: results,
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

//view a student quiz result by lesson id
router.get('/quiz_results/:lessonId', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            },
        });

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });
        
        //check student
        const currentStudent = await Student.findOne({
            where: {
                user_name: checkUser.user_name
            },
        });

        const result = await Quiz_Result.findOne({
            where: {
                student_id: currentStudent.student_id,
                lesson_id: currentLesson.lesson_id,
            }
        });

        const getListLessons = await Lesson.findAll({
            where: {
                lesson_id: result.lesson_id
            }
        })

        if(!result){
            return res.json({
                message: "Quiz result not found"
            })
        }

        return res.json({
            message: "Quiz result found",
            data: {
                results: result,
                lessons: getListLessons.lesson_name
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

//view all grammars in a lesson
router.get('/lessons/:lessonId/grammars', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        })

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: currentLesson.subject_id
            }
        })

        const grammars = await Grammar.findAll({
            where: {
                lesson_id: currentLesson.lesson_id
            }
        });

        if(!grammars){
            return res.json({
                message: "grammars not found"
            });
        }

        return res.json({
            message: "grammars found",
            data: {
                grammars: grammars,
                subject: currentSubject.subject_code,
                lesson: currentLesson.lesson_name
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

//view grammar by grammar id
router.get('/grammars/:grammarId', checkAuth, async(req, res) => {
    try {
        const grammarId = req.params.grammarId

        const grammar = await Grammar.findOne({
             where: {
                 grammar_id: grammarId
             }
        });

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: grammar.lesson_id
            }
        });

        const currentSubject = await Subject.findOne({
            where: {
                subject_id: currentLesson.subject_id
            }
        })

        if(!grammar){
            return res.json({
                message: "grammar not found"
            })
        }

        return res.json({
            message: "grammar found",
            data: {
                grammars: grammar,
                subject: currentSubject.subject_code,
                lesson: currentLesson.lesson_name
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

//check thong tin diem danh
router.get('/attendance', checkAuth, async(req, res) => {
    try {
        //const lessonId = req.params.lessonId;

        // const currentLesson = await Lesson.findOne({
        //     where: {
        //         lesson_id: lessonId
        //     }
        // })

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });
        //check student
        const currentStudent = await Student.findOne({
            where: {
                user_name: checkUser.user_name
            },
        });

        const checkAttendance = await Is_Attended.findAll({
            where: {
                student_id: currentStudent.student_id,
                ///lesson_id: currentLesson.lesson_id
            },
            include: [
                { model: Lesson, attributes: ['lesson_name'] },
                //{ model: Class, attributes: ['class_name'] }
            ],
        });

        if(!checkAttendance){
            return res.json({
                message: "Attendance information not found"
            });
        }

        return res.json({
            message: "Attendance information found",
            data: {
                attendances: checkAttendance,
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

module.exports = router;