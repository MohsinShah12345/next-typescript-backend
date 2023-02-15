"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const bookingRouter = express_1.default.Router();
exports.bookingRouter = bookingRouter;
bookingRouter
    .get("/:id", controllers_1.booking.getBooking)
    .get("/bookings", controllers_1.booking.getAllBooking)
    .post("/", controllers_1.booking.createBooking)
    .patch("/:id", controllers_1.booking.changeBooking)
    .delete("/:id", controllers_1.booking.cancelBooking);
