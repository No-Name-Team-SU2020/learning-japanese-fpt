const router = require('express').Router();
const db = require('../db');
const { Op } = require("sequelize");
const User = require('../models/User');
const Class = require('../models/Class');
const Subject = require('../models/Subject');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const checkAuth = require('../middleware/checkAuth');
const validInfo = require('../middleware/validInfo');
//const checkRole = require('../middleware/checkRole');

let refreshTokens = [];

//login
router.post('/login', validInfo, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
             where: { 
                 email: email
            } 
        });
        // await pool.query("SELECT * FROM users WHERE email = $1", 
        // [email]);

        //check if user exist in database
        if(!user){
            return res.status(401).json({
                message: "User not found"
            });
        }

        //check valid password
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({
                message: "Password or email is incorrect"
            });
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

        //return token and username
        return res.json({
            message: "Login successfully!",
            data: {
                token: token,
                user: user.user_name,
            }
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//logout (could be not needed, might be removed later)
router.delete('/logout', checkAuth, async(req, res) => {
    try {
        //const refreshToken = req.body.token;
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        //token successfully removed
        res.status(204).json({
            message: "Logged out"
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
});

//view profile
router.get('/profile',checkAuth, async(req, res) => {
    try {
        const {user_name} = req.body;
        
        //get user profile by their user_name
        const user = await User.findOne({
            where: { 
                user_name: user_name
            }
        });
        // await pool.query("SELECT display_name, email FROM users WHERE user_name = $1",
        // [user_name]);

        if(!user){
            return res.status(401).json({
                message: "User profile not found",
                data: null
            });
        }
        else{
            res.json({
                message: "Found user profile",
                data: user
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
module.exports = router;

//basic search, search for user by username or display name
router.get('/search',checkAuth, async(req,res) => {
    const input = req.body.input;

    try {
        const user = await User.findAll({
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            {user_name: new RegExp(input, 'i')},
                            {display_name: new RegExp(input, 'i')}
                        ]
                    }
                ]
            },
            limit: 10
        });

        if(!user || user.length === 0){
            return res.status(404).send("No user founded");
        }
        return res.json({
            message: "Found user",
            data: user
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
