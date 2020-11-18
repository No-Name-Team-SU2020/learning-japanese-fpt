const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

//check admin
module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.status(403).json("User not authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.refreshTokenSecret);

        //check if user exist on db
        const user = await User.findOne({
            where: {
                user_name: payload.id
            }
        });

        if(!user){
            return res.status(401).send("User not found");
        }

        if(user.role_id !== 1){
            return res.status(401).send("You are not admin");
        }

        req.user = user;
        next();
        
    } catch (error) {
        console.log(error.message)
        return res.status(403).json({
            message: "Admin error",
            error: error
        });
    }
}