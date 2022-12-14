const Router = require("koa-router");
const {
  verifyAuth,
  verifyPermissionComment,
} = require("../middleware/auth.middleware");

const {
  create,
  detail,
  list,
  update,
  remove,
} = require("../controller/moment.controller");

const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);
momentRouter.get("/", list);

momentRouter.get("/:momentId", detail);
// 用户登录，有权限
momentRouter.post(
  "/:momentId",
  verifyAuth,
  verifyPermissionComment("moment"),
  update
); // 修改文章内容
momentRouter.delete(
  "/:momentId",
  verifyAuth,
  verifyPermissionComment("moment"),
  remove
); // 删除文章

module.exports = momentRouter;
