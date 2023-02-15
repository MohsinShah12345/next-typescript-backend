"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingModel = new mongoose_1.Schema({
    bookedBy: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
        },
    ],
    paidAmount: Number,
    bookedDate: Date,
    slot: {
        startTime: Date,
        endTime: Date,
    },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
const bookingmodel = (0, mongoose_1.model)("booking", bookingModel);
exports.default = bookingModel;
