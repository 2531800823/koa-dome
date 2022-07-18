const service = require("../service/use.service");
const authService = require("../service/auth.service");
const errorType = require("../constants/error-types");
const jwt = require("jsonwebtoken");
const { md5password } = require("../utils/password-handle");
const { PUBLIC_KEY } = require("../app/config");

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
  ctx.user = result[0][0];
  await next();
};

const verifyAuth = async (ctx, next) => {
  console.log("验证授权的 middleware~!");

  const authorization = ctx.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    ctx.user = result;
    await next();
  } catch (err) {
    console.log(err);
    const error = new Error(errorType.AUTH_IS_FALSE);
    return ctx.app.emit("error", error, ctx);
  }
};

// 每个要写一遍 验证有无权限，用下面的方法，直接 可以多个
const verifyPermission = async (ctx, next) => {
  // 查数据库
  console.log("验证权限的middleware~");

  const { id } = ctx.user;
  const { momentId } = ctx.params;

  // 查询是否具备权限
  const isPermission = await authService.checkMoment(momentId, id);
  if (!isPermission) {
    const error = new Error(errorType.MOMENT_ID_IS_FALSE);
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};

const verifyPermissionComment = (tableName) => async (ctx, next) => {
  // 查数据库
  console.log("验证权限的middleware~");

  const { id } = ctx.user;
  const res = ctx.params;

  // 查询是否具备权限
  const isPermission = await authService.checkTable(
    tableName,
    res[tableName + "Id"],
    id
  );
  if (!isPermission) {
    const error = new Error(errorType.MOMENT_ID_IS_FALSE);
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};

module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermissionComment,
};
