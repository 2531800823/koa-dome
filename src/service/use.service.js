const connection = require("../app/database");

class UserSercive {
  // 创建用户
  async create(user) {
    // 讲user 传入数据库
    console.log("将用户数据保存到数据库里", user);
    const { name, password } = user;
    const statement = `INSERT into users (name,password) VALUES (?, ?)`;
    const result = await connection.execute(statement, [name, password]);
    return result;
  }

  // 查看用户名是否存在
  async getUserByName(name) {
    const statement = `SELECT name,password FROM users WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);
    return result;
  }
}

module.exports = new UserSercive();
