const router = require('express').Router();
const moment = require('moment');
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');
const Subject = require('../models/Subject');
const Lesson = require('../models/Lesson');
const User = require('../models/User');
const Student = require('../models/Student');
const Quiz_Result = require('../models/Quiz_Result');
const Teacher_Class = require('../models/Teacher_Class');
const Class_Subject = require('../models/Class_Subject');
const Student_Class = require('../models/Student_Class');
const Teacher_Subject = require('../models/Teacher_Subject');

//view all subject the teacher teaching
router.get('/teacher-subjects', checkAuth, async(req, res) => {
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
                { model: Subject, through: {attributes: []} },
            ],
        });

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
                { model: Class, through: {attributes: []} },
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

//view all classes in subject
router.get('/subject-classes/:subjectId', checkAuth, async(req, res) =>{
    try {
        const subjectId = req.params.subjectId;

        const data = await Subject.findAll({
            where: {subject_id: subjectId},
            attributes: ['subject_id','subject_code', 'subject_name'],
            include: [
                { model: Class, through: {attributes: []} },
            ]
        });

        if(!data){
            return res.json({
                message: "cannot find data"
            })
        }

        return res.json({
            message: "classes in subject found",
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

//view all student inside class
router.get('/class-students/:classId', checkAuth, async(req, res) => {
    try {
        const classId = req.params.classId;

        const data = await Class.findAll({
            where: { class_id: classId },
            attributes: ['class_id', 'class_name'],
            include: [
                { model: Student, through: {attributes: []}}
            ],
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

//view all student quiz results by lesson id
router.get('/lessons/:lessonId/quiz-results', checkAuth, async(req, res) => {
    try {
        const lessonId = req.params.lessonId;

        const results = await Quiz_Result.findAll({
            where: {
                lesson_id: lessonId
            }
        });

        if(!results){
            return res.json({
                message: "Can't find quiz results"
            });
        }

        return res.json({
            message: "quiz results found",
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

//view student quiz result by student id
router.get('/quiz-results/:studentId', checkAuth, async(req, res) =>{
    try {
        const studentId = req.params.studentId;

        const results = await Quiz_Result.findAll({
            where: {
                student_id: studentId
            }
        });

        if(!results){
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

module.exports = router