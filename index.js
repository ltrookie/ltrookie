const Koa = require('koa')
const app = new Koa()
const cors = require('koa-cors')
const router= require('koa-router')();
const mainRouter= require("./routers/index")
const bannersRouter = require("./routers/tuijian")

// 挂载跨域中间件
app.use(cors())
app.use(mainRouter)
router.use("/tuijian",bannersRouter)

app.use(router.routes())



app.listen(3300,()=>{
    console.log("your app is running");
    
})