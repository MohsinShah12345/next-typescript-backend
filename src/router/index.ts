import express, { Router } from "express";
import { authRouter } from "../routes/auth";
import { bookingRouter } from "../routes/booking";
import { eventRouter } from "../routes/event";
import { requestRouter } from "../routes/request";
import { transactionRouter } from "../routes/transaction";
import { userRouter } from "../routes/user";
const serviceRouter: Router = express.Router();

serviceRouter
  .use("/auth", authRouter)
  .use("/booking", bookingRouter)
  .use("/event", eventRouter)
  .use("/request", requestRouter)
  .use("/transaction", transactionRouter)
  .use("/user", userRouter);

export { serviceRouter };
