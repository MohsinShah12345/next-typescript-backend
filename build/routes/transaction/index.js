"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const transactionRouter = express_1.default.Router();
exports.transactionRouter = transactionRouter;
transactionRouter
    .get("/:id", controllers_1.transaction.getTransaction)
    .get("/transactions", controllers_1.transaction.getAllTransactions)
    .post("/", controllers_1.transaction.createTransaction)
    .patch("/:id", controllers_1.transaction.updateTransaction)
    .delete("/:id", controllers_1.transaction.deleteTransaction);
