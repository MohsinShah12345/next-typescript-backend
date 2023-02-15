import mongoose, { Schema, model } from "mongoose";
import { BookingDocument } from "../interfaces/models/booking";
const bookingModel = new Schema<BookingDocument>(
  {
    bookedBy: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    paidAmount: Number,
    bookedDate: Date,
    slot: {
      startTime: Date,
      endTime: Date,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const bookingmodel = model<BookingDocument>("booking", bookingModel);
export default bookingModel;
