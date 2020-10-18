const pool = require('../db');

module.exports = function permit(...permittedRoles) {
    return (req, res, next) => {
        const { user } = req

        const user_role = pool.query
            ("SELECT role_name "
                + "FROM public.users, public.role "
                + "WHERE 'role'.role_id = users.role_id");

        if (user && permittedRoles.includes(user_role)) {
            next();
        }
        else {
            res.status(403).send("Access forbidden");
        }
    }
}