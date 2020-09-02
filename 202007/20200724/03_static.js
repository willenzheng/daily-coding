const express=require('express');
const app=express();
app.listen(8080);
//使用托管静态资源的中间件，让浏览器自动找文件
app.use(express.static('./public'));