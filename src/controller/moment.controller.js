const {
  insert,
  getMomentById,
  getMomentList,
} = require("../service/moment.service");

class MomentController {
  // 插入动态
  async create(ctx, next) {
    // 1.获取数据 (user_id, content)
    const useId = ctx.user.id;
    const context = ctx.request.body.context;

    const result = await insert(useId, context);

    ctx.body = result;
  }

  // 获取某一个动态
  async detail(ctx, next) {
    // 获取 momentID
    const momentId = ctx.request.params.momentId;

    // 查询 id 的这条数据
    const result = await getMomentById(momentId);
    ctx.body = result;
  }
  async list(ctx, next) {
    const { offset = 10, size = 10 } = ctx.request.query;

    // 查询列表

    const result = await getMomentList(offset, size);

    ctx.body = result;
  }
}

module.exports = new MomentController();
