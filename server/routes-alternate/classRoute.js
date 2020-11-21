const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');
const Class = require('../models/Class');

//view all classes
router.get('/classes', checkAuth, async(req, res) => {
    try {
        const classes = await Class.findAll();

        if(!classes){
            return res.status(301).json({
                message: "Something wrong",
                data: null
            });
        }

        return res.status(200).json(
            {
                message: "All subjects found",
                data: classes
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

//Create new class
router.post('/classes', checkAuth, async (req, res) => {
    try {
        const { class_id, class_name } = req.body;

        if (!class_id) {
            return res.status(301).json({
                message: "class id is not valid",
                data: null,
            });
        }

        if (!class_name) {
            return res.status(301).json({
                message: "class name is not valid",
                data: null,
            });
        }

        const newClass = await Class.create({
            class_id,
            class_name,
        });

        return res.status(201).json({
            message: 'Class created successfully',
            data: newClass
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//Update class
router.put('/classes/:classId', checkAuth, async (req, res) => {
    try {

        const classId = req.params.classId;

        const { class_name } = req.body;

        if (!classId) {
            return res.status(404).json({
                message: 'Class not found',
            });
        }

        const updateClass = await Class.update({
            class_name,
        },
            {
                where: {
                    class_id: classId
                }
            });

        return res.status(200).json({
            message: 'Update successfully',
            data: updateClass
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
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
                message: 'Subject cannot be deleted',
            });
        }

        return res.status(200).json({
            message: 'Class deleted successfully',
            data: deleteClass
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

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