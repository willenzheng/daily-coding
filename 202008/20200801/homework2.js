const express=require("express");
const app=express();
app.listen(8080);
const mysql=require("mysql");
const pool=mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"xz",
    connectionaLimit:"20"
});
app.use(express.static("../20200801"));
app.get("/list",(req,res)=>{
    var sql="select * from xz_user";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
});