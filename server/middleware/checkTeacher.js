const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

//check if user is really user lol
module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.status(403).json("User not authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.refreshTokenSecret);

        //check if user exist on db
        const user = await User.findByPk(payload.id)

        if(!user){
            return res.status(401).send("User not found");
        }

        if(user.role_id !== 2){
            return res.status(401).send("You are not teacher");
        }

        req.user = payload.user;
        next();
        
    } catch (error) {
        console.log(error.message)
        return res.status(403).json("Error");
    }
}