
//check user role, have to look into it later
module.exports = function permit(...permittedRoles) {
    return (req, res, next) => {
        const { user } = req

        if (user && permittedRoles.includes(user)) {
            next();
        }
        else {
            res.status(403).send("Access forbidden");
        }
    }
}