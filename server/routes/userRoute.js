const router = require('express').Router();
const db = require('../db');
const User = require('../models/User');
const Class = require('../models/Class');
const Subject = require('../models/Subject');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const checkAuth = require('../middleware/checkAuth');
const validInfo = require('../middleware/validInfo');
const checkRole = require('../middleware/checkRole');

let refreshTokens = [];

//login
router.post('/login', validInfo, async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ where: { email: email } })
        // await pool.query("SELECT * FROM users WHERE email = $1", 
        // [email]);

        //check if user exist in database
        if(!user){
            return res.status(401).json("User not found");
        }

        //check valid password
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return res.status(401).json("Password or email is incorrect");
        }

        //generate token for user
        token = jwt.sign({
            id: user.user_name,
        },
        process.env.accessTokenSecret,{
            expiresIn: "12h"
        });

        //generate refresh token
        refreshToken = jwt.sign({
            id: user.user_name,
        },
            process.env.refreshTokenSecret,
        );

        refreshTokens.push(refreshToken)

        return res.json({token, refreshToken}); //check if token is given

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//logout (could be not needed, might be removed later)
router.delete('/logout', checkAuth, async(req, res) => {
    try {
        //const refreshToken = req.body.token;
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        //token successfully removed
        res.status(204).send("Logged out");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//view profile
router.get('/profile',checkAuth, async(req, res) => {
    try {
        const {user_name} = req.body;
        
        //get user profile by their user_name
        const user = await User.findOne( {where: { user_name: user_name}})
        // await pool.query("SELECT display_name, email FROM users WHERE user_name = $1",
        // [user_name]);

        if(!user){
            res.status(401).send("User profile not found");
        }
        else{
            res.json({
                data: user
            })
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//basic search
router.get('/search', async(req,res) => {
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//view all class
router.get('/class', checkAuth, async(req,res) => {
    try {
        const classes = await Class.findAll({
            attributes: ['class_name']
        });

        if(!classes){
            res.status(404).send("Something wrong");
        }
        else{
            return res.json({classes});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//view all subject
router.get('/subject', checkAuth, async(req, res) => {
    try {
        const subject = await Subject.findAll({
            attributes: ['subject_name']
        });

        if(!subject){
            res.status(404).send("Something wrong");
        }
        else{
            return res.json({subject});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//
router.get('/subject/:subjectId', checkAuth, async(req,res) => {
    try {
        const subject_id = req.params.subjectId;

        const subject_detail = await Subject.find({
            
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//
router.get('/class/:classId', checkAuth, async(req,res) => {
    try {
        const class_id = req.params.classId;

        const class_detail = await Class.findOne({
            
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});
module.exports = router;