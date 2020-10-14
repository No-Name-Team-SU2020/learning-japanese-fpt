const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "09001210",
    host: "localhost",
    port: 5432,
    database: "Capstone_Project"
});

module.exports = pool;