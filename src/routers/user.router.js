const Router = require("koa-router");

const { create } = require("../controller/use.controller");
const { verifyUser } = require("../middleware/user.middleware");

const useRouter = new Router({ prefix: "/users" });

useRouter.post("/", verifyUser, create);

module.exports = useRouter;
