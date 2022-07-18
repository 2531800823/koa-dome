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

  // 查询单个数据
  async getMomentById(id) {
    const statement = `SELECT
    m.id id ,
    m.content content,
    m.updateAt updateAt,
    m.createAt createAt,
    JSON_OBJECT('id',u.id,'name',u.name) as user
    FROM moment m
    left join
    users u
    on
    m.user_id = u.id
     WHERE m.id = ?;`;

    const [result] = await connection.execute(statement, [id]);
    return result;
  }

  // 查询多个数据
  async getMomentList(offset, size) {
    const statement = `SELECT
    m.id id ,
    m.content content,
    m.updateAt updateAt,
    m.createAt createAt,
    JSON_OBJECT('id',u.id,'name',u.name) as user
    FROM moment m
    left join
    users u
    on
    m.user_id = u.id
    limit ?,?;`;
    try {
      const [result] = await connection.execute(statement, [offset, size]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // 修改文档内容
  async update(content, momentId) {
    const statement = ` update moment set content = ? where id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }
}

module.exports = new MomemtSercive();
