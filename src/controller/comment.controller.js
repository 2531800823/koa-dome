const service = require("../service/comment.service");

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const { id } = ctx.user;
    const result = await service.create(momentId, content, id);

    ctx.body = result;
  }

  async reply(ctx, next) {
    const { momentId, content, commentId } = ctx.request.body;
    const { id } = ctx.user;
    const result = await service.reply(momentId, content, id, commentId);

    ctx.body = result;
  }

  async update(ctx, next) {
    const { commentId } = ctx.params;
    const { content } = ctx.request.body;
    const { id } = ctx.user;
    console.log(commentId);
    const result = await service.update(content, commentId, id);
    // console.log(result);
    ctx.body = "xiugaichengg";
  }
}

module.exports = new CommentController();
