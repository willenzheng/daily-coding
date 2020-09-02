const express=require('express');
// const querystring=require('querystring');
const bodyParser=require('body-parser');
const app=express();
app.listen(8080);
app.use(express.static('./public'));
//应用body-parser中间件
//将post请求的数据解析为对象
//在解析为对象的时候，内部也会使用查询字符串模块
//如果是true，会使用第三方的qs
//如果是false，会使用核心模块的querystring
app.use(bodyParser.urlencoded({
    extended:false
}));
app.post('/mylogin',(req,res)=>{
    // req.on('data',(chunk)=>{
    //     let str=chunk.toString();
    //     let obj=querystring.parse(str);
    //     console.log(obj);
    // });
    //获取post请求的数据
    console.log(req.body);
    res.send('登录成功');
});