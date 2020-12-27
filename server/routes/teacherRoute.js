const router = require('express').Router();
const db = require('../db');
const { QueryTypes, json } = require('sequelize');
const sequelize = require('sequelize');
const moment = require('moment');
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');
const Subject = require('../models/Subject');
const Lesson = require('../models/Lesson');
const User = require('../models/User');
const Student = require('../models/Student');
const Quiz_Result = require('../models/Quiz_Result');
const Is_Attended = require('../models/Is_Attended');
const Teacher_Class = require('../models/Teacher_Class');
const Class_Subject = require('../models/Class_Subject');
const Student_Class = require('../models/Student_Class');
const Teacher_Subject = require('../models/Teacher_Subject');

//view all subject the teacher teaching
router.get('/teacher-subjects', checkAuth, async (req, res) => {
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
        });

        const data = await Teacher.findOne({
            where: { teacher_id: currentTeacher.teacher_id },
            attributes: ['teacher_id', 'teacher_name'],
            include: [
                { model: Subject, through: { attributes: [] } },
            ],
        });

        //console.log(43, data.subjects[0].subject_id);

        if (!data) {
            return res.status(301).json({
                message: "cannot find data",
            })
        }

        return res.json({
            message: "subjects found",
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
                { model: Class, through: { attributes: [] } },
            ]
        });

        if (!data) {
            return res.json({
                message: "cannot find data",
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

//view tất cả student trong 1 class kèm theo thông tin điểm danh theo lesson luôn
router.get('/lessons/:lessonId/class-students/:classId', checkAuth, async (req, res) => {
    try {
        //const isSubmit = new Boolean(true);

        const lessonId = req.params.lessonId;

        const classId = req.params.classId;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        });

        if (!currentLesson) {
            return res.json({
                message: "Cannot find lesson in db"
            })
        }

        const currentClass = await Class.findOne({
            where: {
                class_id: classId
            }
        });

        if (!currentClass) {
            return res.json({
                message: "Cannot find class in db"
            })
        }

        const datas = await Class.findAll({
            where: { class_id: currentClass.class_id },
            include: [
                {
                    model: Student, through: { attributes: [] },
                    include: [
                        { model: Is_Attended, where: { lesson_id: currentLesson.lesson_id }, required: false },
                    ]
                },
            ],
            //raw: true
        });

        // const newData = datas.forEach(data => {

        // })
        //console.log(159, datas);

        if (!datas) {
            return res.json({
                message: "Cannot find data",
            })
        }

        return res.json({
            message: "Students found",
            data: datas
        });


    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all student quiz results by lesson id
// router.get('/lessons/:lessonId/quiz-results', checkAuth, async (req, res) => {
//     try {
//         const lessonId = req.params.lessonId;

//         const currentLesson = await Lesson.findOne({
//             where: {
//                 lesson_id: lessonId
//             },
//         });

//         const results = await Quiz_Result.findAll({
//             where: {
//                 lesson_id: currentLesson.lesson_id,
//             },
//             include: [
//                 { model: Lesson }
//             ]
//         });

//         // const getListLessons = await Lesson.findOne({
//         //     where: {
//         //         lesson_id: result.lesson_id
//         //     }
//         // })

//         if (!results) {
//             return res.json({
//                 message: "Quiz results not found"
//             })
//         }

//         return res.json({
//             message: "Quiz results found",
//             data: {
//                 results: results,
//                 //lessons: getListLessons.lesson_name
//             }
//         });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({
//             message: "Server error",
//             error: error
//         });
//     }
// });

//view student quiz result by student id
router.get('/quiz-results/:studentId', checkAuth, async (req, res) => {
    try {
        const studentId = req.params.studentId;

        const results = await Quiz_Result.findAll({
            where: {
                student_id: studentId
            },
            include: [
                {
                    model: Student, attributes: ['student_name'],
                    // include: [
                    //     { model: Class, attributes: ['class_name'], through: {attributes: []} }
                    // ]
                },
                { model: Lesson, attributes: ['lesson_name'] }
            ],
        });

        if (!results) {
            return res.json({
                message: "student quiz results not found"
            });
        }

        return res.json({
            message: "found student quiz result",
            data: results
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//điểm danh cho 1 sinh viên
router.post('/attendance', checkAuth, async (req, res) => {
    try {
        //request
        const { student_id, lesson_id, class_id } = req.body;

        //check user
        const currentUser = req.user.user_name;

        const checkUser = await User.findOne({
            where: {
                user_name: currentUser
            }
        });

        //check teacher
        const currentTeacher = await Teacher.findOne({
            where: {
                user_name: checkUser.user_name
            },
        });

        //check teacher class
        const checkTeacherClass = await Teacher_Class.findOne({
            where: {
                teacher_id: currentTeacher.teacher_id,
                class_id: class_id
            }
        })

        if (!checkTeacherClass) {
            return res.json({
                message: "Teacher not in class"
            })
        }

        //check student class
        const checkStudentClass = await Student_Class.findOne({
            where: {
                student_id: student_id,
                class_id: class_id
            }
        });

        if (!checkStudentClass) {
            return res.json({
                message: "student not in class"
            })
        }

        //check lesson and subject
        const checkLesson = await Lesson.findOne({
            where: {
                lesson_id: lesson_id
            }
        });

        const checkSubjectClass = await Class_Subject.findOne({
            where: {
                class_id: class_id,
                subject_id: checkLesson.subject_id
            }
        });

        if (!checkSubjectClass) {
            return res.json({
                message: "lesson belong to the subject is not in this class"
            })
        }

        const checkSubmit = new Boolean(true);
        //check xem student đã được điểm danh chưa, tránh bị trùng(điểm danh 2 lần)
        const checkDuplicate = await Is_Attended.findOne({
            where: {
                student_id: student_id,
                lesson_id: lesson_id,
                class_id: class_id
            },
        });

        if (!checkDuplicate) {
            const addAttended = await Is_Attended.create({
                student_id,
                lesson_id,
                class_id
            });

            return res.json({
                message: "student taken attendance",
                data: {
                    attendance: addAttended,
                    submit: !checkSubmit
                }
            });
        }
        else {
            return res.json({
                message: "student already attended",
                data: {
                    attendance: checkDuplicate,
                    submit: !checkSubmit
                }
            })
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//check thong tin diem danh cua sinh vien
// router.get('/attendance/:studentId', checkAuth, async (req, res) => {
//     try {
//         const studentId = req.params.studentId;

//         const checkAttendance = await Is_Attended.findAll({
//             where: {
//                 student_id: studentId
//             },
//             include: [
//                 { model: Lesson, attributes: ['lesson_name'] },
//                 { model: Class, attributes: ['class_name'] }
//             ],
//         });

//         if (!checkAttendance) {
//             return res.json({
//                 message: "attendance information not found",
//                 data: null
//             });
//         }

//         return res.json({
//             message: "attendance information found",
//             data: {
//                 attendances: checkAttendance,
//             }
//         });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({
//             message: "Server error",
//             error: error
//         });
//     }
// });

//view progress for chart
router.get('/lessons/:lessonId/progress/:classId', checkAuth, async (req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const classId = req.params.classId;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            }
        });

        if (!currentLesson) {
            return res.json({
                message: "Cannot find lesson in db"
            })
        }

        const currentClass = await Class.findOne({
            where: {
                class_id: classId
            }
        });

        if (!currentClass) {
            return res.json({
                message: "Cannot find class in db"
            })
        }

        const countTotal = await Class.findAndCountAll({
            where: { class_id: currentClass.class_id },
            include: [
                {
                    model: Student, through: { attributes: [] },
                    include: [
                        {
                            model: Quiz_Result, where: { lesson_id: currentLesson.lesson_id },
                            required: false
                        },
                    ]
                },
            ],
            //raw: true
        });

        if (!countTotal) {
            return res.json({
                message: "Data not found"
            })
        }

        // const countDidQuiz = await Class.findAndCountAll({
        //     where: { class_id: currentClass.class_id },
        //     include: [
        //         {
        //             model: Student, through: { attributes: [] },
        //             include: [
        //                 {
        //                     model: Quiz_Result, where: { lesson_id: currentLesson.lesson_id },
        //                     required: true
        //                 },
        //             ]
        //         },
        //     ],
        //     //raw: true
        // });

        // if (!count) {
        //     return res.json({
        //         message: "Cannot find data",
        //     })
        // }

        const topStudent = await Quiz_Result.findAll({
            where: { lesson_id: currentLesson.lesson_id },
            include: [
                {
                    model: Student,
                    //attributes: [],
                    as: 'student',
                    required: true,
                    include: [
                        {
                            model: Class, where: { class_id: currentClass.class_id }, through: { attributes: [] }
                            //required: false
                        },
                    ]
                },
            ],
            //group: ['student.student_id', 'student->classes.class_id', 'quiz_result.quiz_id']
            limit: 5,
            order: [
                ['score', 'DESC']
            ]
        });


        if (!topStudent) {
            return res.json({
                message: "Data not found"
            })
        }

        const sum = await db.query('SELECT SUM("score") AS "total_score" FROM (SELECT "quiz_result"."quiz_id", "quiz_result"."student_id", "quiz_result"."lesson_id", "quiz_result"."score", "quiz_result"."percentage", "student"."student_id" AS "student.student_id", "student"."student_name" AS "student.student_name", "student"."user_name" AS "student.user_name", "student->classes"."class_id" AS "student.classes.class_id", "student->classes"."class_name" AS "student.classes.class_name" FROM "quiz_result" AS "quiz_result" INNER JOIN "student" AS "student" ON "quiz_result"."student_id" = "student"."student_id" INNER JOIN ( "student_class" AS "student->classes->student_class" INNER JOIN "class" AS "student->classes" ON "student->classes"."class_id" = "student->classes->student_class"."class_id") ON "student"."student_id" = "student->classes->student_class"."student_id" AND "student->classes"."class_id" = ? WHERE "quiz_result"."lesson_id" = ? GROUP BY "student"."student_id", "student->classes"."class_id", "quiz_result"."quiz_id") AS Big;',
            {   replacements: [currentClass.class_id, currentLesson.lesson_id],
                type: QueryTypes.SELECT, raw: true 
            });

        if (!sum) {
            return res.json({
                message: "Data not found"
            })
        }

        //const check = Array.isArray(sum);

        //console.log(count);
        //console.log(sum);

        return res.json({
            message: "Datas found",
            data: {
                count_total: countTotal,
                //count_did_quiz: countDidQuiz,
                total_score: sum,
                top_student: topStudent
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