class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body;

    ctx.body = `登录成功, 欢迎回来${name}~`;
  }
}

module.exports = new AuthController();
