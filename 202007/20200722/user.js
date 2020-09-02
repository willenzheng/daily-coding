const express=require('express');
const r=express.Router();
r.get('/list',(req,res)=>{
    res.send('这是用户列表');
});
module.exports=r;