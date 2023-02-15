import { Request, Response } from "express";
import { returnAny } from "../../interfaces/common";
import userModel from "../../models/auth";
import { authService } from "../../services";
import { throwError } from "../../utils/responses";

export const singleUser = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
export const allUsers = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
export const updateUser = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
