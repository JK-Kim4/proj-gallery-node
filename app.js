const express = require("express");
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000; // <- 3000에서 다른 숫자로 변경

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('views', './static/views')
app.set('view engine', 'ejs');

const gallery = require("./app/routes/gallery");
const s3 = require("./app/routes/s3");
//app.use("/s3", s3);
app.use("/gallery", gallery);

app.get("/", (req,res)=>{
    console.log("index page");
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});



app.listen(PORT, (err)=>{
    if(err)
        console.log(err);
    else
        console.log(`server is running on ${PORT} now`);
});