const connection = require("../app/database");

class AuthService {
  // async checkMoment(momentId, userId) {
  //   const statement = `SELECT * FROM moment WHERE id = ? and user_id = ?`;
  //   const [result] = await connection.execute(statement, [momentId, userId]);
  //   console.log(result);
  //   return result[0]?.user_id === userId;
  // }
  async checkTable(tableName, momentId, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? and user_id = ?`;
    const [result] = await connection.execute(statement, [momentId, userId]);
    console.log(result);
    return result[0]?.user_id === userId;
  }
}

module.exports = new AuthService();
