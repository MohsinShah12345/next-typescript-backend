import express, { Router } from "express";
import { transaction } from "../../controllers";
const transactionRouter: Router = express.Router();

transactionRouter
  .get("/:id", transaction.getTransaction)
  .get("/transactions", transaction.getAllTransactions)
  .post("/", transaction.createTransaction)
  .patch("/:id", transaction.updateTransaction)
  .delete("/:id", transaction.deleteTransaction);
export { transactionRouter };
