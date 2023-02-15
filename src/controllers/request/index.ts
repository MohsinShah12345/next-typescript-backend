import { Request, Response } from "express";
import { requestService } from "../../services";
import { throwError } from "../../utils/responses";
export const getRequest = async (req: Request, res: Response): Promise<any> => {
  try {
    const request = await requestService.getRequestById();
  } catch (error) {
    return throwError(res, error);
  }
};
export const getAllRequets = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const request = await requestService.getAllRequests();
  } catch (error) {
    return throwError(res, error);
  }
};
export const createRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const request = await requestService.createRequest();
  } catch (error) {
    return throwError(res, error);
  }
};
export const updateRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const request = await requestService.updateRequest();
  } catch (error) {
    return throwError(res, error);
  }
};
export const deleteRequest = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const request = await requestService.deleteRequest();
  } catch (error) {
    return throwError(res, error);
  }
};
