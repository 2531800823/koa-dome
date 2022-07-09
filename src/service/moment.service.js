const connection = require("../app/database");

class MomemtSercive {
  // 插入一个文章
  async insert(userId, context) {
    // 讲user 传入数据库
    console.log("将文章保存到数据库里", userId, context);

    const statement = `insert into moment (content,user_id) values (?,?);`;
    const [result] = await connection.execute(statement, [context, userId]);
    return result;
  }
}

module.exports = new MomemtSercive();
