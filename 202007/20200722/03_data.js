const express=require('express');
const querystring=require('querystring');
const app=express();
app.listen(8080);
app.get('/search',(req,res)=>{
    res.sendFile(__dirname+'/search.html');
});
app.get('/mysearch',(req,res)=>{
    console.log(req.query);
    console.log(req.query.keyword);
    res.send('搜索成功');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});
app.post('/mylogin',(req,res)=>{
    //获取post请求的数据，传递的方式通过流
    req.on('data',(chunk)=>{
        let str=String(chunk);
        let obj=querystring.parse(str);
        console.log(obj);
    });
    res.send('登录成功');
});
//创建查看包的使用说明的路由
//路由传参
app.get('/package/:pname',(req,res)=>{
    console.log(req.params);
    res.send('这是包的详情介绍'+req.params.pname);
    
});
app.get('/shopping/:lid/:num',(req,res)=>{
    console.log(req.params);
    res.send('添加成功');
});