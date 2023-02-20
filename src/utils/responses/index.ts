import { error } from "console";
import { Response } from "express";
export const successResponse = (
  res: Response,
  data: any = {},
  status: number = 200,
  message: string
): any => {
  return res.status(status).json({ data, message });
};
export const failureResponse = (
  res: Response,
  status: number = 400,
  message: string = "Request Failed For Some Resoons"
): any => {
  return res.status(status).json({ message: message });
};
export const throwError = (
  res: Response,
  err: any = "Internal Server Error"
): any => {
  return res.status(500).json({ message: err.message });
};
export const sendResponse = (res: Response): any => {};
