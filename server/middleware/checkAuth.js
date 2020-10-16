const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.status(403).json("User not authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.accessTokenSecret);

        req.user = payload.user;
        next();
        
    } catch (error) {
        console.log(error.message)
        return res.status(403).json("Error");
    }
}