const router = require('express').Router();
const Question_Group = require('../models/Question_Group');
const Question = require('../models/Question');
const checkAuth = require('../middleware/checkAuth');
const checkRole = require('../middleware/checkRole');

//view question group
router.get('/question-group',checkAuth, async(req, res) => {
    try {
        const group = await Question_Group.findAll({
            attributes: ['group_name']
        });

        if(!group){
            res.status(404).send("Something wrong");
        }
        else{
            return res.json({group});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;