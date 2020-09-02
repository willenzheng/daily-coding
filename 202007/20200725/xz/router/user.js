const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
const { count } = require('console');
//创建路由器对象
const r=express.Router();
//1.用户注册（post /reg）
r.post('/reg',(req,res)=>{
    //1.1获取post请求的数据
    let obj=req.body;
    console.log(obj);
    //1.2判断每一项是否为空
    if(!obj.uname){
        res.send({code:401,msg:'uname required'});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
    if(!obj.email){
        res.send({code:403,msg:'email required'});
        return;
    }
    if(!obj.phone){
        res.send({code:404,msg:'phone required'});
        return;
    }
    pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send({code:200,msg:'register suc'});
    });
});
//2.用户登录（post /login）
r.post('/login',(req,res)=>{
    //2.1获取post请求的数据
    let obj=req.body;
    //2.2验证数据是否为空
    if(!obj.uname){
        res.send({code:401,msg:'uname required'});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
    pool.query('SELECT * FROM xz_user WHERE uname=? and upwd=?',[obj.uname,obj.upwd],(err,result)=>{
        if(err) throw err;
        console.log(result);
        //结果为数组，如果数组长度为0说明登录失败，否则登录成功
        if(result.length===0){
            res.send({code:301,msg:'login err'})
        }else{
            res.send({code:200,msg:'login suc'});
        }
    });
});
//3.修改用户（get /update）
r.get('/update',(req,res)=>{
    //3.1获取数据
    let obj=req.query;
    let i=400;
    for(let key in obj){
        // console.log(key,obj[key]);
        //3.2使用循环验证是否为空
        i++;
        if(!obj[key]){
            res.send({code:i,msg:key+' requried'});
            return;
        }
    }
    pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows===0){
            res.send({code:301,msg:'update err'});
        }else{
            res.send({code:200,msg:'update suc'});
        }
    });
});
r.get('/list',(req,res)=>{
    let obj=req.query;
    console.log(obj);
    if(!obj.pno){
        obj.pno=1;
    }
    if(!obj.count){
        obj.count=2;
    }
    let s=parseInt((obj.pno-1)*obj.count);
    let n=parseInt(obj.count);
    console.log(s,typeof s);
    console.log(n,typeof n);
    pool.query('SELECT * FROM xz_user LIMIT ?,?',[s,n],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});
//导出路由器对象
module.exports=r;