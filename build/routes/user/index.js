"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const verifyToken = require("../../middlewares/auth");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter
    .get("/:id", verifyToken, controllers_1.user.singleUser) // get single User
    .get("/users", verifyToken, controllers_1.user.allUsers) // get All User
    .patch("/:id", verifyToken, controllers_1.user.updateUser) // update User
    .delete("/:id", verifyToken, controllers_1.user.deleteUser); // delete User
