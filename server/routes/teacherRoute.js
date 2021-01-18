const router = require('express').Router();
const db = require('../db');
const { QueryTypes, json } = require('sequelize');
const sequelize = require('sequelize');
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
const fetch = require('node-fetch');
require('dotenv').config();

//view all subject the teacher teaching
router.get('/teacher-subjects', async (req, res) => {
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

        const teacherSubject = await Teacher.findOne({
            where: { teacher_id: currentTeacher.teacher_id },
            attributes: ['teacher_id', 'teacher_name'],
            include: [
                { model: Subject, through: { attributes: [] } },
            ],
        });

        if (!teacherSubject) {
            return res.status(301).json({
                message: "cannot find data",
            })
        }

        return res.json({
            message: "subjects found",
            data: teacherSubject
        })
        // const fap_token = ''
        // const api_url = `http://localhost:8000/teacher/teacher-subjects`;
        // const fetch_response = await fetch(api_url, {
        //     method: 'GET',
        //     headers: {
        //         'fap-token': fap_token
        //     }
        // });

        // const fetched_json = await fetch_response.json();
        // return res.json({
        //     message: "Fetch success",
        //     data: fetched_json.data
        // });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all classes of teacher
router.get('/teacher-classes', async (req, res) => {
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

        const teacherClass = await Teacher.findAll({
            where: { teacher_id: currentTeacher.teacher_id },
            include: [
                { model: Class, through: { attributes: [] } },
            ]
        });

        if (!teacherClass) {
            return res.json({
                message: "Cannot find data",
            })
        }

        return res.json({
            message: "Classes found",
            data: teacherClass
        });
        // const fap_token = ''
        // const api_url = `http://localhost:8000/teacher/teacher-classes`;
        // const fetch_response = await fetch(api_url, {
        //     method: 'GET',
        //     headers: {
        //         'fap-token': fap_token
        //     }
        // });

        // const fetched_json = await fetch_response.json();
        // return res.json({
        //     message: "Fetch success",
        //     data: fetched_json.data
        // });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view student quiz results detail by lesson id
router.get('/lessons/:lessonId/quiz-results/:studentId', async (req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const studentId = req.params.studentId;

        const currentLesson = await Lesson.findOne({
            where: {
                lesson_id: lessonId
            },
        });

        if(!currentLesson){
            return res.json({
                message: "Lesson not found"
            })
        }

        const findStudent = await Student.findOne({
            where: {
                student_id: studentId
            }
        });

        if(!findStudent){
            return res.json({
                message: "Student not found"
            })
        }

        const results = await Quiz_Result.findOne({
            where: {
                lesson_id: currentLesson.lesson_id,
                student_id: findStudent.student_id
            },
            include: [
                { model: Lesson }
            ]
        });

        if (!results) {
            return res.json({
                message: "Quiz result not found"
            })
        }

        return res.json({
            message: "Quiz result found",
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

//view student quiz result by student id
router.get('/quiz-results/:studentId', async (req, res) => {
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
                { model: Lesson, attributes: ['lesson_id','lesson_name'] }
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

//view progress for chart
router.get('/lessons/:lessonId/progress/:classId', async (req, res) => {
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