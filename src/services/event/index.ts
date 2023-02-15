import { Schema } from "mongoose";
import eventModel from "../../models/event";

import { returnVoid } from "../../interfaces/common";
export const getEventByID = async (
  data: any = {}
): Promise<any | returnVoid> => {
  try {
    const event = await eventModel.findById(data);
    return event;
  } catch (error) {
    throw error;
  }
};

export const createEvent = async (
  data: any = {}
): Promise<any | returnVoid> => {
  try {
    const event = await eventModel.create({ ...data });
    return event;
  } catch (error) {
    throw error;
  }
};
export const getAllEvents = async (
  data: any = {}
): Promise<any | returnVoid> => {
  try {
    const events = await eventModel.find({});
    return events;
  } catch (error) {
    throw error;
  }
};
export const updateEvent = async (
  data: any = {}
): Promise<any | returnVoid> => {
  try {
    const event = await eventModel.findByIdAndUpdate(
      data.id,
      {
        ...data.body,
        $push: {
          images: [...data.images], // if admin upload new images on updation
        },
      },
      { new: true } //return updated data of event
    );
    return event;
  } catch (error) {
    throw error;
  }
};
export const deleteEvent = async (
  data: any = {}
): Promise<any | returnVoid> => {
  try {
    const event = await eventModel.findByIdAndRemove(data);
    return event;
  } catch (error) {
    throw error;
  }
};
