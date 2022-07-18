const Router = require("koa-router");
const { create } = require("../controller/comment.controller");
const { verifyLogin, verifyAuth } = require("../middleware/auth.middleware");

const commentRouter = new Router({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);

module.exports = commentRouter;
