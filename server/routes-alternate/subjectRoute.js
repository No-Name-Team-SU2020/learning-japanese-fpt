const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const Teacher = require('../models/Teacher');
const Class = require('../models/Class');
const Subject = require('../models/Subject');

//view all subject for admin
router.get('/subject', checkAuth, async (req, res) => {
    try {
        const subjects = await Subject.findAll();

        if (!subjects) {
            return res.status(301).json({
                message: "Something wrong",
                data: null
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
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//create new subject
router.post('/subject', checkAuth, async(req, res) => {
    try {
        const { subject_id, subject_name } = req.body;

        if(!subject_id){
            return res.status(301).json({
                message: "question content is not valid",
                data: null,
            });
        }

        if(!subject_name){
            return res.status(301).json({
                message: "question content is not valid",
                data: null,
            });
        }

        const newSubject = Subject.create({
            subject_id,
            subject_name,
        });

        return res.status(200).json({
            message: 'Subject created successfully',
            data: newSubject
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//update subject
router.put('/subject', checkAuth, async(req, res) => {
    try {
        const
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//delete subject
router.delete('/subject', checkAuth, async(req, res) => {
    try {
        const
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view subject base on class
router.get('/subject', checkAuth, async (req, res) => {
    try {
        const { class_id } = req.body;

        const data = await Class.findAll({
            where: { class_id },
            attributes: ['class_name'],
            include: [
                { model: Subject }
            ]
        });

        if (!data) {
            return res.status(301).json({
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


//view all subjects of student
router.get('/subject', checkAuth, async(req, res) => {
    try {
        const { student_id } = req.body;

        const data = await Student.findAll({
            where: { student_id },
            attributes: ['student_name'],
            include: [
                { model: Subject },
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

module.exports = router;