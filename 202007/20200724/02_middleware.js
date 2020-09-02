const express=require('express');
const app=express();
app.listen(8080);
//添加中间件，拦截对/list的请求
//中间件按照URL拦截
//参数1：要拦截的URL
//参数2：回调函数，一旦拦截到，会调用
app.use('/list',(req,res,next)=>{
    //获取查询字符串传递的数据
    // console.log(req.query);
    //判断是否为root
    //如果不是root，则响应‘请提供管理员账户’
    if(req.query.uname!=='root'){
        res.send('请提供管理员账户');
    }else{
        //否则是root，会往后执行其他的中间件或者路由
        next();
    }
});
//显示所有用户的路由，要求管理员root权限
app.get('/list',(req,res)=>{
    res.send('这是所有的用户');
});
//创建添加购物车的路由（get/shopping），传递商品的价格price，添加中间件拦截该路由，在中间件中将价格打9折；最后在路由中响应打折后的价格‘该商品价格为：xxx’
// let priceNew;
// app.use('/shopping',(req,res,next)=>{
//     priceNew=req.query.price*0.9;
//     next();
// });
// app.get('/shopping',(req,res)=>{
//     res.send(`该商品价格为：${priceNew}`);
// });
app.get('/shopping',(req,res)=>{
    res.send(`该商品价格为：${req.query.price*0.9}`);
});