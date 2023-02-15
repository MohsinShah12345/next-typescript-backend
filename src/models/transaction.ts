import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    method: {
      type: String,
    },
    amount: {
      type: String,
    },
    paymentDate: { type: Date },
    paidBy: { type: String },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const transactionModel = model("transaction", transactionSchema);
export default transactionModel;
