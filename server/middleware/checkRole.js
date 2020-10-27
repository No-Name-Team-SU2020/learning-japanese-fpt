const User = require('../models/User');

//check user role not use for now
module.exports = function permit(...permittedRoles) {
    return (req, res, next) => {
        //const user = await User.find()

        if (user && permittedRoles.includes(user.role_id)) {
            next();
        }
        else {
            res.status(403).send("Access forbidden");
        }
    }
}