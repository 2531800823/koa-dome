const Router = require("koa-router");

const { create } = require("../controller/use.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const useRouter = new Router({ prefix: "/users" });

useRouter.post("/", verifyUser, handlePassword, create);

module.exports = useRouter;
