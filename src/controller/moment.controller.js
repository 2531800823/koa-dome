const {
  insert,
  getMomentById,
  getMomentList,
  update,
  remove,
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
  async update(ctx, next) {
    const { momentId } = ctx.params;
    const { context } = ctx.request.body;
    const { id } = ctx.user;

    // 修改内容
    const result = await update(context, momentId);
    console.log(result);
    ctx.body = "修改内容~" + momentId + context + id;
  }
  async remove(ctx, next) {
    const { momentId } = ctx.params;
    const result = await remove(momentId);
    ctx.body = result;
  }
}

module.exports = new MomentController();
