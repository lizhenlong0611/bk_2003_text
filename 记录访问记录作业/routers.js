const fs = require("fs")
const os =require("os")
const time = require("./date")
console.log(time);
const per = (req,res,next)=>{

        let socket=  req.socket.remoteAddress
        let url =  req.url
        let method =req.method
        let browser =req.headers['user-agent']
        let server = socket+'-----'+time+'-----'+url+'-----'+method+'------'+browser+ os.EOL
        fs.appendFile(`./logs/${time}.log`,server,err=>{
        console.log(err);
        next()
        })
}
module.exports=per