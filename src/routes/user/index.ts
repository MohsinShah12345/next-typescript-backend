import express, { Router } from "express";
import { user } from "../../controllers";
const verifyToken = require("../../middlewares/auth");
const userRouter: Router = express.Router();
userRouter
  .get("/:id", verifyToken, user.singleUser) // get single User
  .get("/users", verifyToken, user.allUsers) // get All User
  .patch("/:id", verifyToken, user.updateUser) // update User
  .delete("/:id", verifyToken, user.deleteUser); // delete User
export { userRouter };
