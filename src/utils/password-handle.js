const crypto = require("crypto"); //内置库，有可加密

const md5password = (password) => {
  const md5 = crypto.createHash("md5");
  const result = md5.update(password).digest("hex");
  return result;
};

module.exports = {
  md5password,
};
