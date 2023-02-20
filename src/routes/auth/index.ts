import express, { Router } from "express";
import { auth } from "../../controllers";
import { validate, userSchema } from "../../validators";
import { upload } from "../../utils/awsMethods";
const authRouter: Router = express.Router();
authRouter
  .post(
    "/signUp",
    validate(userSchema),
    //  upload.single("image"),
    auth.signUp
  )
  .post("/signIn", auth.login)
  .patch("/forgotPassword", auth.forgotPassword);

export { authRouter };
