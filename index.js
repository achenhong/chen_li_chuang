// 引入express
const express=require("express");
const app=express();
app.listen(8080);


// 1,引入用户路由器
const ur=require("./router/user.js");
// 引入bodyparser中间件解析对象
const bodyParser=require("body-parser");
// 应用中间件，将post请求数据解析为对象
app.use(bodyParser.urlencoded({
extended:false
}));
// 托管静态资源
app.use(express.static("./public"));
//2, 挂载路由（前缀，引入的路由名称）
app.use("/user",ur);