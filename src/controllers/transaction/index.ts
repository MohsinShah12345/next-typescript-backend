import { Request, Response } from "express";
import { transactionService } from "../../services";
import { throwError } from "../../utils/responses";
export const getTransaction = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const transaction = await transactionService.getTransactionById();
  } catch (error) {
    return throwError(res, error);
  }
};
export const getAllTransactions = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const transaction = await transactionService.getAllTransactions();
  } catch (error) {
    return throwError(res, error);
  }
};

export const createTransaction = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const transaction = await transactionService.createTransaction();
  } catch (error) {
    return throwError(res, error);
  }
};

export const updateTransaction = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const transaction = await transactionService.updateTransaction();
  } catch (error) {
    return throwError(res, error);
  }
};

export const deleteTransaction = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const transaction = await transactionService.deleteTransaction();
  } catch (error) {
    return throwError(res, error);
  }
};
