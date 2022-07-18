const Router = require("koa-router");
const { create, reply, update } = require("../controller/comment.controller");
const {
  verifyAuth,
  verifyPermissionComment,
} = require("../middleware/auth.middleware");

const commentRouter = new Router({ prefix: "/comment" });

// 发表评论
commentRouter.post("/", verifyAuth, create);
// 回复评论
commentRouter.post("/reply", verifyAuth, reply);
// 修改评论
commentRouter.patch(
  "/:commentId",
  verifyAuth,
  verifyPermissionComment("comment"),
  update
);
// 删除评论
commentRouter.delete(
  "/:commentId",
  verifyAuth,
  verifyPermissionComment("comment"),
  reply
);

module.exports = commentRouter;
