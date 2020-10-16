const pool = require('../db');

export function permit(...permittedRoles) {
    return (req, res, next) => {
        const { user } = req.body

        const user_role = await pool.query
            ("SELECT user_name,role_name "
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