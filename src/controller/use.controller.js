const service = require("../service/use.service");

class UserController {
  async create(ctx, next) {
    // 获取请求传递的参数
    const user = ctx.request.body;
    // c查询数据 , 传入 用户数据
    const result = await service.create(user);
    // 返回数据
    // ctx.body = result
    ctx.body = result;
  }
}

module.exports = new UserController();
