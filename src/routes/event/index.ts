import express, { Router } from "express";
import { event } from "../../controllers";
import { upload } from "../../utils/awsMethods";
import { validate, eventSchema } from "../../validators/zod"; // zod validation for event data
const eventRouter: Router = express.Router();
eventRouter
  .get("/:id", event.getEvent) // get single Event
  .get("/events", event.getAllEvents) // get all Event
  .post(
    "/",
    // validate(eventSchema), // noit working will we hit through postman
    upload.array("images"),
    event.addEvent
  ) // create Event
  .patch("/:id", event.updateEvents) // update Event
  .delete("/:id", event.deleteEvent); // delete Event

export { eventRouter };
