"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../routes/auth");
const booking_1 = require("../routes/booking");
const event_1 = require("../routes/event");
const request_1 = require("../routes/request");
const transaction_1 = require("../routes/transaction");
const user_1 = require("../routes/user");
const serviceRouter = express_1.default.Router();
exports.serviceRouter = serviceRouter;
serviceRouter
    .use("/auth", auth_1.authRouter)
    .use("/booking", booking_1.bookingRouter)
    .use("/event", event_1.eventRouter)
    .use("/request", request_1.requestRouter)
    .use("/transaction", transaction_1.transactionRouter)
    .use("/user", user_1.userRouter);
