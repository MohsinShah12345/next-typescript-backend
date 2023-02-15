"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
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
    ],
    perDayRate: { type: String },
    hourlyRate: { type: Number },
    images: [{ type: String }],
    bookedSlots: [{ startTime: { type: Date }, endTime: { type: Date } }],
    bookingRef: [{ type: mongoose_1.Schema.Types.ObjectId }], // all bookings
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });
const eventModel = (0, mongoose_1.model)("event", eventSchema);
exports.default = eventModel;
