const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())


app.get("/adduser",(req,res) => { 
  console.log(req.body)
  res.send("Response received"+req.body);
});

app.listen(4000,()=>console.log("Server on localhost:4000"));

// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })