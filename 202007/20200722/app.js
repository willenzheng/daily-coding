const express=require('express');
const ru=require('./user.js');
const rp=require('./product.js');
const app=express();
app.listen(8080);
//把引入的路由器挂载到服务器，路由器中的路由就会成为服务器的一部分
//在挂载的同时，可以给URL添加统一的前缀
//参数1：添加的前缀
//参数2：引入的路由器
//访问形式：/user/list
app.use('/user',ru);
app.use('/pro',rp);
