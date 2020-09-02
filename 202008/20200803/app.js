const express=require("express");
const app=express();
app.listen(8080);
app.use(express.static("../20200803"));
const mysql=require("mysql");
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'xz',
    connectionLimit:'20'
});
app.delete("/res_get_del/:uid",(req,res)=>{
    var _uid=req.params.uid;
    var sql="delete from xz_user where uid=?";
    pool.query(sql,[_uid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRow>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});
//使用restful-post登录（其实应该用get）
app.get("/post_login",(req,res)=>{
    var _uname=req.query.uname;
    var _upwd=req.query.upwd;
    var sql="select * from xz_user where uname=? and upw=?";
    pool.query(sql,[_uname,_upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});
