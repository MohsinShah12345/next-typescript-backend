import mongoose, { Schema, model } from "mongoose";
import { RequestDocument } from "../interfaces/models/request";
const requestSchema = new Schema<RequestDocument>(
  {
    user: { type: String },
    type: { type: String },
    slot: { startTime: { type: String }, endTime: { type: String } },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const requestModel = model<RequestDocument>("request", requestSchema);
export default requestModel;
