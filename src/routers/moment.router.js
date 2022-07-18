const Router = require("koa-router");
const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/auth.middleware");

const {
  create,
  detail,
  list,
  update,
} = require("../controller/moment.controller");

const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);
momentRouter.get("/", list);

momentRouter.get("/:momentId", detail);
// 用户登录，有权限
momentRouter.post("/:momentId", verifyAuth, verifyPermission, update); // 修改内容

module.exports = momentRouter;
