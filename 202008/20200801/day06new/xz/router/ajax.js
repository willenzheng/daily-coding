const express=require('express');
//引入连接池模块e
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//1.ajax第一个测试接口
r.get('/first',(req,res)=>{
    console.log(1111);
    res.send('第一个ajax测试接口');
})
r.get('/ajax02',(req,res)=>{
    res.send('ajax练习');
});
//3.原生http的get带参方法
r.get("/http_get",(req,res)=>{
    var _uname=req.query.uname;
    var _upwd=req.query.upwd;
    var sql="select * from xz_user where uname=? and upwd=?";
    pool.query(sql,[_uname,_upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});


//导出路由器对象
module.exports=r;