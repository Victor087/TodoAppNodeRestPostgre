const Pool = require("pg").Pool;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'my_todos_db',
    password:'password',
    port:'5432'
});

module.exports = pool;