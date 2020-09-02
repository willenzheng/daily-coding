const express=require('express');
const querystring=require('querystring');
const app=express();
app.listen(8080);
app.get('/detail',(req,res)=>{
    let str='lid=5';
    let obj=querystring.parse(str);
    res.send(obj.lid);
});