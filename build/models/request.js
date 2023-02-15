"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const requestSchema = new mongoose_1.Schema({
    user: { type: String },
    type: { type: String },
    slot: { startTime: { type: String }, endTime: { type: String } },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
const requestModel = (0, mongoose_1.model)("request", requestSchema);
exports.default = requestModel;
