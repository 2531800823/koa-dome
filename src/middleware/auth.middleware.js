const service = require("../service/use.service");
const errorType = require("../constants/error-types");
const { md5password } = require("../utils/password-handle");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;

  // 用户名密码是否为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    //   事件名称带两个参数
    ctx.app.emit("error", error, ctx);
    return;
  }

  // 用户名是否已存在
  const result = await service.getUserByName(name);
  if (result[0]?.length < 1) {
    const error = new Error(errorType.USER_IS_FALSE);
    return ctx.app.emit("error", error, ctx);
  }
  // 判断密码是否正确
  if (result[0][0]?.password !== md5password(password)) {
    const error = new Error(errorType.PASSWORD_IS_FALSE);
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};

module.exports = {
  verifyLogin,
};
