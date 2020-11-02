const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');
const Teacher_Class = require('../models/Teacher_Class');

//view all classes of teacher
router.get('/class', checkAuth, async(req, res) =>{
    try {
        const {class_id} = req.body;

        // const { teacher_id } = req.body;
        // const teacher = await Teacher.findByPk(teacher_id);

        const classes = await Teacher_Class.findAll({
            where: {class_id},
            attributes: ['class_id', 'teacher_id'],
            include: [
                {model: Teacher, through: {attributes: ['teacher_name']}},
                {model: Class, through: {attributes: ['class_name']}}
            ]
        });

        return res.json({
            message: "Classes found!",
            data: classes
        })


    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});



module.exports = router