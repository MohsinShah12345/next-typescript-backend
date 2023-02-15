import { Request, Response } from "express";
import Mongoose, { Schema } from "mongoose";
import { eventService } from "../../services";
import { throwError, successResponse } from "../../utils/responses/index";

export const getEvent = async (req: Request, res: Response): Promise<any> => {
  try {
    const event = await eventService.getEventByID(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    return throwError(res, error);
  }
};
export const getAllEvents = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const events = await eventService.getAllEvents();
    res.json(200).json(events);
  } catch (error) {
    return throwError(res, error);
  }
};
export const addEvent = async (req: Request, res: Response): Promise<any> => {
  try {
    const images: any = req.files ?? [];
    const eventData = {
      ...req.body,
      images: [...images?.map((_: any) => _.location)] ?? [],
    };
    const event = await eventService.createEvent(eventData);
    res.status(200).json(event);
  } catch (error) {
    return throwError(res, error);
  }
};
export const updateEvents = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const images: any = req.files ?? [];
    const data = {
      id: new Mongoose.Types.ObjectId(req.params.id),
      body: {
        ...req.body,
      },
      images: ["New Image"],
    };
    const event = await eventService.updateEvent(data);
    return successResponse(
      res,
      event,
      200,
      "Event has been updated Successfully"
    );
  } catch (error) {
    return throwError(res, error);
  }
};
export const deleteEvent = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const event = eventService.deleteEvent();
    res.status(200).json({ message: "event has been deleted" });
  } catch (error) {
    return throwError(res, error);
  }
};
