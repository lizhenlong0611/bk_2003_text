//导入
const express = require("express")
01

//导入模块
//创建web服务对象实例
const app = express()
//导入中间件模块
const per = require('./routers')
//设置路由
app.use(per)

app.get('/get',(req,res)=>{
        /* let socket=  req.socket.remoteAddress
        let url =  req.url
        let method =req.method
        let browser =req.headers['user-agent']
        let server = socket+'-----'+time+'-----'+url+'-----'+method+'------'+browser+ os.EOL
        fs.appendFile(`./logs/${time}.log`,server,err=>{
          //console.log(err);
        }) */
          res.send('执行完毕')
}) 
//启动服务器
app.listen(8080,(req,res)=>{
  console.log("sever in running at http://127.0.0.1:8080");
})