const router = require('express').Router();
const { compare } = require('bcrypt');
const pool = require('../db');
const checkAuth = require('../middleware/checkAuth');

//login
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", 
        [email]);

        if(user.rows.length === 0){
            return res.status(401).json("Password or email is incorrect");
        }

        const validPassword = await compare(password, user.rows[0].password);

        if(!validPassword){
            return res.status(401).json("Password or email is incorrect");
        }

    } catch (error) {
        
    }
});

//logout
router.post('/logout', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
});