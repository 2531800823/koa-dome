const fs = require("fs");

const useRoutes = (app) => {
  // 读取当前文件夹下目录 所有文件名
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return;
    //   路由文件
    const reuter = require(`./${file}`);

    app.use(reuter.routes());
    app.use(reuter.allowedMethods());
  });
};

module.exports = useRoutes;
