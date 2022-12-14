const errorType = require("../constants/error-types");

const errorHandler = (error, ctx) => {
  let status, message;

  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      (status = 400), (message = "用户名和密码不能为空~");
      break;
    case errorType.USER_IS_TRUE:
      (status = 409), (message = "用户名已存在~");
      break;
    case errorType.USER_IS_FALSE:
      (status = 401), (message = "用户名不存在~");
      break;
    case errorType.PASSWORD_IS_FALSE:
      (status = 400), (message = "密码错误~");
      break;
    case errorType.AUTH_IS_FALSE:
      (status = 401), (message = "无效的token~");
      break;
    case errorType.MOMENT_ID_IS_FALSE:
      (status = 401), (message = "不具备操作权限~");
      break;
    default:
      (status = 404), (message = "NOT FOUND");
      break;
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
