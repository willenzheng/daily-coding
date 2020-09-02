const express=require('express');
const querystring=require('querystring');
const p=express.Router();
p.get('/list',(req,res)=>{
    res.send('这是商品列表');
});
p.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});
p.get('/list/:pname',(req,res)=>{
    res.send(`这是商品${req.params.pname}的详情`);
});
module.exports=p;