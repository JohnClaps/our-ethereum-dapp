const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "db-pswd24@mw",//db-pswd24@mw
    host:"localhost",
    port: 5432,
    database: "off_chain_db"
});

const createTblQry = 'CREATE TABLE accounts (user_id SERIAL PRIMARY KEY, username VARCHAR (50) UNIQUE NOT NULL,password VARCHAR (50) UNIQUE NOT NULL);';
pool.query(createTblQry).then((response) => {
        console.log ("Table created");
        console.log (response);
    })

.catch((err) =>{
    console.log(err);
});

module.exports = pool;