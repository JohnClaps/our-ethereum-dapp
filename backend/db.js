const Pool = require('pg').Pool;

const pool =  new Pool({
    user:'postgres',
    host:'localhost',
    database:'off_chain_db',
    password:'db-pswd24@mw',
    port:5432

})

module.exports = pool;

