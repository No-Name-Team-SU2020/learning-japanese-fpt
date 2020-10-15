const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const jwtRefresher = require('../utils/jwtRefresher');
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

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if(!validPassword){
            return res.status(401).json("Password or email is incorrect");
        }

        const token = jwtGenerator(user.rows[0].user_name);
        const refreshToken = jwtRefresher(user.rows[0].user_name);

        return res.json({token, refreshToken}); //check if token is given

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//logout
router.delete('/logout', async(req, res) => {
    try {
        let refreshTokens = [];
        //const refreshToken = req.body.token;
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        res.sendStatus(204);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;