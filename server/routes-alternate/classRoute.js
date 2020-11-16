const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');
const Class = require('../models/Class');

//view all classes of student
router.get('/class', checkAuth, async (req, res) => {
    try {

        const { student_id } = req.body;

        const data = await Student.findAll({
            where: { student_id },
            attributes: ['student_name'],
            include: [
                { model: Class },
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
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view all classes of teacher
router.get('/class', checkAuth, async (req, res) => {
    try {
        // const {class_id} = req.body;

        const { teacher_id } = req.body;
        // const teacher = await Teacher.findOne({
        //     where: {
        //         teacher_id: teacher_id
        //     },
        //     attributes: ['teacher_id']
        // });

        const data = await Teacher.findAll({
            where: { teacher_id },
            attributes: ['teacher_name'],
            include: [
                { model: Class },
                //{model: Class, through: {attributes: ['class_name']}}
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

module.exports = router;