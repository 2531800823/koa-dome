const dotenv = require("dotenv"); // 读取环境变量中的  .env 挂载到 process
const fs = require("fs");
const path = require("path");

// 配置读取 .env 下变量
dotenv.config();

console.log(path.resolve(__dirname, "../keys/private.key"));

// 读取公钥和私钥
const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, "../keys/private.key")
);
const PUBLIC_KEY = fs.readFileSync(
  path.resolve(__dirname, "../keys/public.key")
);

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_ROOT,
  MYSQL_PASSWORD,
} = process.env;

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;
