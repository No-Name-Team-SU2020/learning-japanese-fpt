const router = require('express').Router();
const pool = require('../db');
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
        const {email, password} = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", 
        [email]);

        //check if user exist in database
        if(user.rows.length === 0){
            return res.status(401).json("User not found");
        }

        //check valid password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if(!validPassword){
            return res.status(401).json("Password or email is incorrect");
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

router.get('/viewProfile', checkAuth, checkRole('Student', 'Teacher'), async(req, res) => {
    try {
        const {user_name} = req.body;
        
        const user = await pool.query("SELECT display_name, email FROM users WHERE user_name = $1",
        [user_name]);

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