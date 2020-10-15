const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtRefresher(user_name){
    const payload = {
        user: {
            id: user_name
        }
    }

    return jwt.sign(payload, process.env.jwtSecret);
}

module.exports = jwtRefresher;