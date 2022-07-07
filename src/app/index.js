const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const useRouter = require("../routers/user.router");
const authRouter = require("../routers/auth.router");
const errorHandler = require("./error-handle");

const app = new Koa();

app.use(bodyParser());
app.use(useRouter.routes());
app.use(useRouter.allowedMethods()); // 判断该路由请求方式 有无

app.use(authRouter.routes());
app.use(authRouter.allowedMethods()); // 判断该路由请求方式 有无

app.on("error", errorHandler);

module.exports = app;
