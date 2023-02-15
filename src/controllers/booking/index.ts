import { Request, Response } from "express";
import { bookingService } from "../../services";
import { throwError } from "../../utils/responses";
export const getBooking = async (req: Request, res: Response): Promise<any> => {
  try {
    const event = await bookingService.getBooking(req.params.id);
    console.log(event);
  } catch (error) {
    return throwError(res, error);
  }
};
export const getAllBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    console.log("controller");
  } catch (error) {
    return throwError(res, error);
  }
};
export const createBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    console.log("controller1");
  } catch (error) {
    return throwError(res, error);
  }
};
export const changeBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    console.log("controller2");
  } catch (error) {
    return throwError(res, error);
  }
};
export const cancelBooking = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    console.log("controller");
    console.log("second function");
  } catch (error) {
    return throwError(res, error);
  }
};
