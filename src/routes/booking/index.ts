import express, { Router } from "express";
import { booking } from "../../controllers";
const bookingRouter: Router = express.Router();
bookingRouter
  .get("/:id", booking.getBooking)
  .get("/bookings", booking.getAllBooking)
  .post("/", booking.createBooking)
  .patch("/:id", booking.changeBooking)
  .delete("/:id", booking.cancelBooking);
export { bookingRouter };
