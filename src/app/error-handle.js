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
    default:
      (status = 404), (message = "NOT FOUND");
      break;
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
