const router = require('express').Router();
const db = require('../db');
const User = require('../models/User');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const jwtGenerator = require('../utils/jwtGenerator');
const jwtRefresher = require('../utils/jwtRefresher');
const checkAuth = require('../middleware/checkAuth');
const validInfo = require('../middleware/validInfo');
const checkRole = require('../middleware/checkRole');

let refreshTokens = [];

//login
router.post('/login', validInfo, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } })
        // await pool.query("SELECT * FROM users WHERE email = $1", 
        // [email]);

        //check if user exist in database
        if(!user){
            return res.status(401).json("User not found");
        }

        //check valid password
        const validPassword = await bcrypt.compare(password, User.password);

        if (!validPassword) {
            return res.status(401).json("Password or email is incorrect2");
        }

        //generate token for user
        token = jwtGenerator(user.rows[0].user_name);
        refreshToken = jwtRefresher(user.rows[0].user_name);
        refreshTokens.push(refreshToken)

        return res.json({token, refreshToken}); //check if token is given

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//logout
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
router.get('/viewProfile', checkAuth, async(req, res) => {
    try {
        const {user_name} = req.body;
        
        const user = await User.findOne({ user_name: user_name})
        // await pool.query("SELECT display_name, email FROM users WHERE user_name = $1",
        // [user_name]);

        if(user.rows.length === 0){
            res.status(401).send("User profile not found");
        }
        else{
            res.json(user.rows[0]);
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});
module.exports = router;

//view user 
router.post('/view', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await pool.query("Select display_name ,user_name, email from users where email = $1", [email]);
        if (user.rows.length > 0) {
            res.json(user.rows)
        }else{
            res.status(500).send("Can not found!");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});
