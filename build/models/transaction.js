"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    method: {
        type: String,
    },
    amount: {
        type: String,
    },
    paymentDate: { type: Date },
    paidBy: { type: String },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
const transactionModel = (0, mongoose_1.model)("transaction", transactionSchema);
exports.default = transactionModel;
