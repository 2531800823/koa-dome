const { insert } = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    // 1.获取数据 (user_id, content)

    const useId = ctx.user.id;
    const context = ctx.request.body.context;

    const result = await insert(useId, context);

    ctx.body = result;
  }
}

module.exports = new MomentController();
