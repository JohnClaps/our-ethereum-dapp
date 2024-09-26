const express =  require ("express");
const cors = require("cors");

const server = express ();

server.use(express.json());
server.use(cors());

server.get("\adduser",(req,res) => {
  console.log(req.body);
  res.send("Response received"+req.body);
});

server.listen(4000,()=>console.log("Server is running on localhost:4000"));

