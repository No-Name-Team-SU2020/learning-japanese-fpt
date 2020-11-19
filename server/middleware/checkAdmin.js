const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

//check admin
module.exports = async (req, res, next) => {
    const token = req.header('token');

    if(!token){
        return res.status(401).json("No token");
    }

    const payload = jwt.verify(token, process.env.refreshTokenSecret);

    try {
        //check if user exist on db
        const user = await User.findOne({
            where: {
                user_name: payload.id
            },
            attributes: {
                exclude: ['password']
            }
        });

        if(!user){
            return res.status(404).send("User not found");
        }

        if(user.role_id !== 1){
            return res.status(403).send("You are not admin");
        }

        req.user = user;
        req.token = token;
        next();
        
    } catch (error) {
        console.log(error.message)
        return res.status(403).json("Not authorized to access resources");
    }
}