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
const validInfoGoogle = require('../middleware/validInfoGoogle');
const fetch = require('node-fetch');

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


//list user, test deploy and fetch
router.get('/list-users', async(req, res) => {
    try {
        const api_url = 'http://localhost:8000/list-users';
        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();
        return res.json({
            message: "Fetch success",
            data: json
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