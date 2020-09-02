const express=require("express");
const pool=require("../pool.js");
const r=express.Router();
//登录模块
r.get("/login/:uname&:upwd",(req,res)=>{
    var _uname=req.params.uname;
    var _upwd=req.params.upwd;
    var sql="select * from xz_user where uname=? and upwd=?";
    pool.query(sql,[_uname,_upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else {
            res.send("0")
        }
    });
});
//查询用户列表模块
r.get("/list",(req,res)=>{
    var sql="select * from xz_user";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
//根据uid删除用户模块
r.delete("/deluser/:uid",(req,res)=>{
    var _uid=req.params.uid;
    var sql="delete from xz_user where uid=?";
    pool.query(sql,[_uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("1");
        }else {
            res.send("0")
        }
    });
});
//根据uid查询用户信息
r.get("/search/:uid",(req,res)=>{
    var _uid=req.params.uid;
    var sql="select * from xz_user where uid=?";
    pool.query(sql,[_uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else {
            res.send("0");
        }
    });
});
//修改用户信息
r.put("/search",(req,res)=>{
    var _uid=req.body.uid;
    var _uname=req.body.uname;
    var _email=req.body.email;
    var _phone=req.body.phone;
    var _user_name=req.body.user_name;
    var _gender=req.body.gender;
    var sql="update xz_user set uname=?,email=?,phone=?,user_name=?,gender=? where uid=?";
    pool.query(sql,[_uname,_email,_phone,_user_name,_gender,_uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});
//查询注册用户名
r.get("/reg/:user",(req,res)=>{
    var _uname=req.params.user;
    var sql="select * from xz_user where uname=?";
    pool.query(sql,[_uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else {
            res.send("0");
        }
    });
});
//插入用户
r.get("/sert/:user&:upwd",(req,res)=>{
    var _uname=req.params.user;
    var _upwd=req.params.upwd;
    var sql="insert into xz_user (uname,upwd) values(?,?)";
    pool.query(sql,[_uname,_upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});
//从list页插入用户
r.post("/insert",(req,res)=>{
    var _uname=req.body.uname;
    var _upwd=req.body.upwd;
    var _email=req.body.email;
    var _phone=req.body.phone;
    var _user_name=req.body.user_name;
    var _gender=req.body.gender;
    var obj=req.body;
    console.log(obj)
    var sql="insert into xz_user (uname,upwd,email,phone,user_name,gender) values(?,?,?,?,?,?)";
    pool.query(sql,[_uname,_upwd,_email,_phone,_user_name,_gender],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("1");
            console.log(_gender);
            
        }else{
            res.send("0");
        }
    });
});






module.exports=r;