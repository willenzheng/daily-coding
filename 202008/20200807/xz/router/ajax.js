const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//导出路由器对象
r.get('/first',(req,res) => {
	console.log('11111');
	res.send('一挽长夏');
})
r.get('/getList',(req,res) => {
	console.log('请求中...');
	let obj = req.query;
	pool.query('SELECT * FROM xz_user', (err,result) => {
		if(err) throw err;
		res.send(result);
	})
})
r.get("/http_get",(req,res) => {
	let _uname = req.query.uname;
	let _upwd = req.query.upwd;
	let sql = 'SELECT * FROM xz_user WHERE uname = ? AND upwd = ?';
	pool.query(sql,[_uname,_upwd],(err,result) => {
		if(err) throw err;
		if(!result.length){
			res.send("0");
		}else{
			res.send("1");
		}
	})
})
r.get("/user_update",(req,res) => {
	let _uid = req.query.uid;
	console.log(_uid)
	let sql = "select * from xz_user where uid=?";
	pool.query(sql,[_uid],(err,result) => {
		if(err) throw err;
		console.log(result)
		res.send(result);
	})
})
r.put("/user_update",(req,res) => {
	//console.log(req.body)
	let _uid = req.body.uid;
	let obj = {};
	obj.uname = req.body.uname;
	obj.upwd = req.body.upwd;
	obj.phone = req.body.phone;
	//console.log(_uid,_uname,_upwd);
	
	let sql = "UPDATE xz_user SET ? WHERE uid=?";
	pool.query(sql,[obj,_uid],(err,result) => {
		if(err) throw err;
		console.log(result);
		if(result.affectedRows == 0){
			res.send("0");
		}else{
			res.send("1");
		}
	})
})
//使用restful-post 登录
r.post("/post_login",(req,res) => {
	let _uname = req.body.uname;
	let _upwd = req.body.upwd;
	let sql = "select * from xz_user where uname = ? and upwd = ?";
	pool.query(sql,[_uname,_upwd],(err,result) => {
		if(err) throw err;
		if(!result.length){
			res.send("0");
		}else{
			res.send("1")
		}
	})
})
//restful-get 完成登录模块
r.get("/restful_login/:uname&:upwd",(req,res) => {
	let _uname = req.params.uname;
	let _upwd = req.params.upwd;
	console.log(_uname,_upwd)
	let sql = "select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result) => {
		if(err) throw err;
		console.log(result);
		if(!result.length){
			res.send("0");
		}else{
			res.send("1");
		}
	})
})
r.get("/restful_list",(req,res) => {
	let sql = "select * from xz_user";
	pool.query(sql,(err,result) => {
		if(err) throw err;
		res.send(result);
	})
})
r.delete("/restful_delete/:uid",(req,res) => {
	let _uid = req.params.uid;
	console.log(_uid);
	let sql = "delete from xz_user where uid = ?";
	pool.query(sql,[_uid],(err,result) => {
		if(err)throw err;
		if(!result.affectedRows){
			res.send('0');
		}else{
			res.send('1');
		}
	})
})
r.put("/restful_put/:uid",(req,res) => {
	let _uid = req.body.uid;
	console.log(uid);
	let obj = req.body;
	delete obj.uid;
	console.log(obj);
	let sql = "update xz_user set ? where uid=?";
	pool.query(sql,[obj,_uid],(err,result) => {
		if(err) throw err;
		if(!result.affectedRows){
			res.send("0");
		}else{
			res.send("1");
		}
	})
})
module.exports=r;