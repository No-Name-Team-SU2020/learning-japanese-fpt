const router = require('express').Router();
const { compare } = require('bcrypt');
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
// const checkAuth = require('../middleware/checkAuth');

//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1",
            [email]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password or email is incorrect1");
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json("Password or email is incorrect2");
        }

        const token = jwtGenerator(user.rows[0].user_name);

        return res.json({ token }); //check if token is givens

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//logout
router.post('/logout', async (req, res) => {
    try {

    } catch (error) {

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
