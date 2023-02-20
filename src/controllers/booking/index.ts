import { Request, Response } from "express";
import { bookingService } from "../../services";
import { throwError } from "../../utils/responses";
export const getBooking = async (req: Request, res: Response): Promise<any> => {
  try {
    const event = await bookingService.getBooking(req.params.id);
  } catch (error) {
    return throwError(res, error);
  }
};
export const getAllBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
export const createBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
export const changeBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
export const cancelBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
  } catch (error) {
    return throwError(res, error);
  }
};
