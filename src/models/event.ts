import mongoose, { Schema, model } from "mongoose";
import { EventDocument } from "../interfaces/models/event";
const eventSchema = new Schema<EventDocument>(
  {
    name: { type: String },
    duration: { type: Date },
    location: { type: String },
    description: { type: String },
    socialMedia: {
      platform: {
        type: String,
      },
      link: {
        type: String,
      },
    },
    questions: [{ type: String }],
    tickets: [
      {
        type: { type: String },
        title: { type: String },
        number: { type: Number },
        valid: { type: Date },
        price: { type: String },
      },
    ], // tickete for events
    perDayRate: { type: String }, // for studio
    hourlyRate: { type: Number }, // for hall
    images: [{ type: String }], // gallerys for all type of events
    bookedSlots: [{ startTime: { type: Date }, endTime: { type: Date } }], // for hall and studio
    bookingRef: [{ type: Schema.Types.ObjectId }], // all bookings
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const eventModel = model<EventDocument>("event", eventSchema);
export default eventModel;
