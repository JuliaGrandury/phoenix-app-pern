const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: 'elephant0928',
    host: 'localhost',
    port: 5432,
    database: 'phoenixapp'
});

module.exports = pool;
