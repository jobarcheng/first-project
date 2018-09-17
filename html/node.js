// 导入模块http mysql express
const http=require("http");
const mysql=require("mysql");
const express=require("express");
// 2: 创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"jd",
    port:3306,
    connectionLimit:5
});
// 3：创建express对象
var app=express();
// 4：创建 server 创建对象
var server=http.createServer(app);
// 5：指定静态目录 
app.use(express.static("html"));
// 6:绑定监听端口
server.listen(3000);
// 7：处理请求
app.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="select count(uid) as c from jd_user where uname=? and upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result[0].c>0){
            res.send({code:1,msg:"登录成功"});
        }else{
            res.send({code:-1,msg:"登录失败"});
        }
    })
})