const express = require("express");
const app = express();


app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})







app.listen(3000,() => {
    console.log("listening to 3000");
})
