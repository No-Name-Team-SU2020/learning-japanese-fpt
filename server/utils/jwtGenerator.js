const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(user_name){
    const payload = {
        user: {
            id: user_name
        }
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "24h"});
}

module.exports = jwtGenerator;