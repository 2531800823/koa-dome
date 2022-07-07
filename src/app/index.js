const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const useRouter = require("../routers/user.router");
const authRouter = require("../routers/auth.router");
const errorHandler = require("./error-handle");
const useRoutes = require("../routers");

const app = new Koa();

app.use(bodyParser());

// 一键注册路由
useRoutes(app);

app.on("error", errorHandler);

module.exports = app;
