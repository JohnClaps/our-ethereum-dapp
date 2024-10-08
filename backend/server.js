const express = require("express")
const cors = require("cors")
const port = 4000;
const app = express()

app.use(express.json())
app.use(cors())


app.get("/adduser",(req,res) => { 
  console.log(req.body)
  res.send("Response received"+req.body);
});

app.listen(port,()=>console.log("Server on localhost:",port));
