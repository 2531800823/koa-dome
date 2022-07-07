const dotenv = require("dotenv"); // 读取环境变量中的  .env 挂载到 process

dotenv.config();

console.log(process.env.APP_PORT);

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_ROOT,
  MYSQL_PASSWORD,
} = process.env;
