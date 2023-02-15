import mongoose, { Schema, model } from "mongoose";
const {
  Types: { ObjectId },
} = mongoose;
import { AuthDocument } from "../interfaces/models/auth";

const user = new Schema<AuthDocument>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const userModel = model<AuthDocument>("User", user);
export default userModel;
