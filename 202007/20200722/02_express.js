//引入express模块
const express=require('express');
//创建web服务器
const app=express();
//设置端口
app.listen(8080);

//路由
//登录的路由：专门处理登录的请求
//请求的URL：/login    请求的方法：get/post
//通过回调函数处理
app.get('/login',(req,res)=>{
    //req请求的对象
    //res响应的对象
    //设置响应的内容并发送
    res.send('这是登录的网页');
});
app.get('/list',(req,res)=>{
    res.send('这是商品列表')
});
//路由：请求方法get 请求url/study
app.get('/study',(req,res)=>{
    res.redirect('http://www.tmooc.cn');
})
//路由：路由间跳转
app.get('/',(req,res)=>{
    res.redirect('list');
});
//路由：请求方法get 请求的url /file
//响应文件1.html
app.get('/file',(req,res)=>{
    res.sendFile(__dirname+'/1.html');
});
// console.log(__dirname);