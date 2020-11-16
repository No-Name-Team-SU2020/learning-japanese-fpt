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

        const payload = jwt.verify(jwtToken, process.env.accessTokenSecret);

        //check if user exist on db
        const user = await User.findByPk(payload.id)

        if(!user){
            return res.status(401).send("User not found");
        }

        req.user = payload.user;
        next();
        
    } catch (error) {
        console.log(error.message)
        return res.status(403).json("Error");
    }
}
