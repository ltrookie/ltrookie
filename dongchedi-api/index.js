const Koa = require('koa')
const app = new Koa()
const cors = require('koa-cors')
const router= require('koa-router')();
const mainRouter= require("./routers/index")
const bannersRouter = require("./routers/tuijian")
const carbrandRouter= require("./routers/xuanche")

// 挂载跨域中间件
app.use(cors())
app.use(mainRouter)
router.use("/tuijian",bannersRouter)
router.use("/xuanche",carbrandRouter)

app.use(router.routes())



app.listen(3300,()=>{
    console.log("your app is running");
    
})