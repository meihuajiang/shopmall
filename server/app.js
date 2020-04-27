const Koa = require("koa");
const App = new Koa();
const { connect, initSchemas } = require("./db/init");
const mongoose = require("mongoose"); //我测试时用到的，你不需要引用
const Router = require("koa-router");
let User = require("./api/user.js");
//let Home = require("./api/home.js"); //我测试时用到的，你不需要引用
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");

App.use(bodyParser()).use(cors());
//装载所有路由
let router = new Router();
router.use("/user", User.routes()); //引号的你自己定义，但是要跟后面的请求接口要对应
//加载路由中间件
App.use(router.routes());
App.use(router.allowedMethods());

(async () => {
  await connect(); //异步连接数据库操作
  initSchemas();
})();
App.use(async ctx => {
  ctx.body = "<h1>hello koa2</h1>";
}).listen(3000, () => {
  console.log("3000端口启动成功!");
});
