const connection = require("../app/database");

class CommentService {
  async create(momentId, content, userId) {
    const statement = `INSERT into comment (content, moment_id,user_id) values (?,?,?);`;
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      userId,
    ]);
    console.log(result);
    return result;
  }
  async reply(momentId, content, userId, commentId) {
    const statement = `INSERT into comment (content, moment_id,user_id,comment_id) values (?,?,?,?);`;
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      userId,
      commentId,
    ]);
    console.log(result);
    return result;
  }
}

module.exports = new CommentService();
