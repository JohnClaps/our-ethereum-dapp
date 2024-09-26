const {response} = require("express");
const {Pool} = require("pg");

const pool = new Pool({
    user : 'postgres',
    host :'localhost',
    password : 'db-pswd24@mw',
    port : 5432,
    database : 'postgres'
});

const createTblQry = 'CREATE TABLE login (firstName VARCHAR (45) ;lastName VARCHAR (50);)';

pool 
    .query(createTblQry)
    .then((response) => {
        console.log ("Table created");
        console.log (response);
    })

.catch((err) =>{
    console.log(err);
});

module.exports = pool;