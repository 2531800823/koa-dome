const Router = require("koa-router");

const testRouter = new Router();

testRouter.get("/cookie", (ctx, next) => {
  console.log(ctx.session.users);
  console.log(ctx.session.a);
  ctx.session.users = "liushipeng";
  ctx.session.a = "liushipeng1";

  ctx.body = `<h1>{成功}</h1>`;
});

module.exports = testRouter;
