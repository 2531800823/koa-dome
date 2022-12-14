const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config");
// 颁发 token 公钥私钥

class AuthController {
  async login(ctx, next) {
    // 可以 传递一个 buffer 的密钥
    const token = jwt.sign(ctx.user, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24 * 7, // 过期时间，单位 秒
      algorithm: "RS256", // 指定非对称加密算法
    });
    console.log(token);

    ctx.body = {
      ...ctx.user,
      token,
    };
  }

  async success(ctx, next) {
    ctx.body = "授权成功~";
  }
}

module.exports = new AuthController();
