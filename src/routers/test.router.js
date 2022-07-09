const Router = require("koa-router");
const jwt = require("jsonwebtoken");

const testRouter = new Router();

testRouter.get("/cookie", (ctx, next) => {
  console.log(ctx.session.users);
  console.log(ctx.session.a);
  ctx.session.users = "liushipeng";
  ctx.session.a = "liushipeng1";

  ctx.body = `<h1>测试 cookie 成功</h1>`;
});

// 发送token
const LIU_KEY = "liushipeng"; // 密钥
testRouter.get("/jwt", (ctx, next) => {
  const user = { id: 10, name: "liu" };
  const token = jwt.sign(user, LIU_KEY, {
    expiresIn: 30, // 过期时间，单位 秒
  });

  ctx.body = token;
});

// 测试 token
testRouter.get("/test/jwt", (ctx, next) => {
  //   console.log(ctx.headers.authorization);
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  console.log(token);

  try {
    const result = jwt.verify(token, LIU_KEY);
    ctx.body = result;
  } catch (error) {
    ctx.body = "token 无效";
  }
});

module.exports = testRouter;
