const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(user_name){
    const payload = {
        user: {
            id: user_name,
        }
    }

    return jwt.sign(payload, process.env.accessTokenSecret, {expiresIn: "12h"});
}

module.exports = jwtGenerator;