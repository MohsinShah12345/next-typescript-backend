import express, { Router } from "express";
import { user } from "../../controllers";
import {
  validate,
  singleUser,
  updateUser,
  updatePassword,
} from "../../validators";
const verifyToken = require("../../middlewares/auth");

const userRouter: Router = express.Router();
userRouter
  .get("/users", verifyToken, user.allUsers) // get All User
  .get("/:id", verifyToken, validate(singleUser), user.singleUser) // get single User
  .patch("/", verifyToken, validate(updateUser), user.updateUser) // update User
  .patch(
    "/password",
    verifyToken,
    validate(updatePassword),
    user.updatePassword
  )
  .delete("/:id", verifyToken, user.deleteUser); // delete User
export { userRouter };
