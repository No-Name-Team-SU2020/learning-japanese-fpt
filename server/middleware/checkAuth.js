const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

//check if user is really user lol
module.exports = async (req, res, next) => {
    const token = req.header('token');

    if(!token){
        return res.status(401).json({
            message: "No token"
        });
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
<<<<<<< HEAD
            return res.status(404).send({message:"User not found"});
=======
            return res.status(404).json({
                message: "User not found"
            });
>>>>>>> 1242fab6e4181c7d41fec545092745e8c9fae29c
        }

        req.user = user;
        req.token = token;
        next();
        
    } catch (error) {
        console.log(error.message)
<<<<<<< HEAD
        return res.status(403).json({message:"Not authorized to access resources"});
=======
        return res.status(403).json({
            message: "Not authorize to access this resource"
        });
>>>>>>> 1242fab6e4181c7d41fec545092745e8c9fae29c
    }
}
