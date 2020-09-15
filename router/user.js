const express=require("express");
const router=express.Router();
// 引入mysql连接池
const pool=require("../pool.js");
router.get("/first",(req,res)=>{
	res.send("第一个路由方法");
	console.log("路由添加成功");
});

// 6,查找所有的用户
router.get("/list",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result);
	});
});




















module.exports=router;