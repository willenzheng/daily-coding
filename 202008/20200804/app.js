const express=require("express");
const app=express();
app.listen(8081);
app.use(express.static("./pro"));

const bodyParser=require("body-parser");

const ur=require("./router/pro.js")

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use("/pro",ur);