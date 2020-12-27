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

let refreshTokens = [];

//google login
router.post('/google', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
});

//login
router.post('/login', validInfo, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
             where: { 
                 email: email
            } 
        });

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
        const accessToken = jwt.sign({
            id: user.user_name,
        },
        process.env.accessTokenSecret,{
            expiresIn: "15s" 
        });

        //generate refresh token
        const refreshToken = jwt.sign({
            id: user.user_name,
        },
            process.env.refreshTokenSecret,{
                expiresIn: "8h"
            }
        );

        refreshTokens.push(refreshToken)

        //return token and username
        return res.json({
            message: "Login successfully!",
            data: {
                accessToken: accessToken,
                refreshToken: refreshToken,
                user: user.user_name,
                role: user.role_id
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

//logout (might not be needed, might be removed later)
router.post('/logout', checkAuth, async(req, res) => {
    try {
        const refreshToken = req.body.token;
        // refreshTokens = refreshTokens.filter((refreshToken) => {
        //     return refreshToken.token !== req.token
        // })
        refreshTokens.splice(0, refreshTokens.length)
        //token successfully removed
        res.status(200).json({
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
        res.status(200).json({
            message: "Found user profile",
            data: req.user
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
