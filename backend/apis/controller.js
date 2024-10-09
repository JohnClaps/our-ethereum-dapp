const pool =  require( "../db");
const getUserLoginCredentials =(req,res)=>{
pool.query("SELECT * FROM users",(error,results)=>{
    if(error) throw error;
});
}

module.exports = {
    getUserLoginCredentials,
};