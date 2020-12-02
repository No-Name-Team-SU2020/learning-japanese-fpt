const router = require('express').Router();
const moment = require('moment');
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');
const Quiz = require('../models/Quiz');
const Subject = require('../models/Subject');
const Lesson = require('../models/Lesson');
const Student = require('../models/Student');
const Teacher_Class = require('../models/Teacher_Class');
const Class_Subject = require('../models/Class_Subject');
const Student_Class = require('../models/Student_Class');

//view all classes of teacher
router.get('/teacher-classes', checkAuth, async (req, res) => {
    try {

        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        const currentTeacher = await Teacher.findOne({
            where: {
                user_name: checkUser.user_name
            },
            attributes: ['teacher_id']
        });

        const data = await Teacher.findAll({
            where: { teacher_id: currentTeacher.teacher_id },
            attributes: ['teacher_id', 'teacher_name'],
            include: [
                { model: Class, through: {attributes: []} },
            ]
        });

        if (!data) {
            return res.status(301).json({
                message: "Something wrong",
            })
        }

        return res.json({
            message: "classes found",
            data: data
        })


    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all student inside teacher class
router.get('/class-students/:classId', checkAuth, async(req, res) => {
    try {
        const classId = req.params.classId;

        const data = await Class.findAll({
            where: { class_id: classId },
            attributes: ['class_id', 'class_name'],
            include: [
                { model: Student, through: {attributes: []}}
            ]
        });

        if (!data) {
            return res.status(301).json({
                message: "Something wrong",
            })
        }

        return res.json({
            message: "students found",
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

module.exports = router
//Tính từ dòng này thì code ở dưới tạm không dùng
//view all quiz
// router.get('/quiz', checkAuth, async (req, res) => {
//     try {
//         const { lesson_id } = req.body;

//         const quizzes = await Quiz.findAll({
//             include: [{
//                 model: Subject,
//                 where: {
//                     lesson_id: lesson_id
//                 }
//             }]
//         });

//         if (!quizzes) {
//             return res.status(301).json({
//                 message: "Something wrong"
//             });
//         }

//         return res.status(200).json({
//             message: "Found all quizzes",
//             data: quizzes
//         });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({
//             message: "Server error",
//             error: error
//         });
//     }
// });

//create quiz
// router.post('/quiz', checkAuth, async (req, res) => {
//     try {

//         const { subject_id } = req.body;

//         const currentSubject = await Subject.findOne({
//             where: {
//                 subject_id: subject_id
//             },
//             attributes: ['subject_id']
//         });

//         // const { quiz_name, number_of_question, start_time, end_time } = req.body;
//         const { quiz_name, number_of_question } = req.body;

//         if (!quiz_name) {
//             return res.status(301).json({
//                 message: "quiz name is not valid",
//                 data: null,
//             });
//         }

//         if (!number_of_question || isNaN(Number(number_of_question)) || Number(number_of_question) < 0) {
//             return res.status(301).json({
//                 message: "number of question is not valid",
//                 data: null,
//             });
//         }

//         // if (start_time) {
//         //     const parsed = moment(String(create_at), 'x')
//         //     if (!parsed.isValid()) {
//         //         return res.status(301).json({
//         //             message: "start time is not valid",
//         //             data: null,
//         //         });
//         //     }
//         // }

//         // if (end_time) {
//         //     const momentEndTime = moment(String(end_time), 'x');
//         //     if (!momentEndTime.isValid()) {
//         //         return res.status(301).json({
//         //             message: "start time is not valid",
//         //             data: null,
//         //         });
//         //     }

//         //     if (start_time) {
//         //         const momentStartTime = moment(String(start_time), 'x');
//         //         if (momentStartTime.isBefore(momentStartTime)) {
//         //             return res.status(301).json({
//         //                 message: "end time cannot happen before start time",
//         //                 data: null,
//         //             });
//         //         }
//         //     }
//         // }

//         const newQuiz = await Quiz.create({
//             quiz_name,
//             number_of_question,
//             start_time,
//             end_time,
//             subject_id: currentSubject,
//         });

//         return res.status(201).json({
//             message: 'Quiz created successfully',
//             data: newQuiz
//         });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({
//             message: "Server error",
//             error: error
//         });
//     }
// });

// //update quiz
// router.put('/quiz/:quizId', checkAuth, async (req, res) => {
//     try {
//         const quizId = req.params.quizId;

//         const { quiz_name, number_of_question, end_time } = req.body;

//         const updateQuiz = await Quiz.update({
//             quiz_name,
//             number_of_question,
//             end_time,
//         },
//             {
//                 where: {
//                     quiz_id: quizId
//                 }
//             });

//         return res.status(200).json({
//             message: 'Update successfully',
//             data: updateQuiz
//         });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({
//             message: "Server error",
//             error: error
//         });
//     }
// });

// //delete quiz
// router.delete('/quiz/:quizId', checkAuth, async (req, res) => {
//     try {
//         const quizId = req.params.quizId;

//         const deleteQuiz = await Quiz.destroy({
//             where: {
//                 quiz_id: quizId
//             }
//         });

//         if (!deleteQuiz) {
//             return res.json({
//                 message: 'Quiz cannot deleted',
//             });
//         }

//         return res.json({
//             message: 'Quiz deleted successfully',
//         });
        
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({
//             message: "Server error",
//             error: error
//         });
//     }
// });