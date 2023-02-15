"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const awsMethods_1 = require("../../utils/awsMethods");
const eventRouter = express_1.default.Router();
exports.eventRouter = eventRouter;
eventRouter
    .get("/:id", controllers_1.event.getEvent) // get single Event
    .get("/events", controllers_1.event.getAllEvents) // get all Event
    .post("/", 
// validate(eventSchema), // noit working will we hit through postman
awsMethods_1.upload.array("images"), controllers_1.event.addEvent) // create Event
    .patch("/:id", controllers_1.event.updateEvents) // update Event
    .delete("/:id", controllers_1.event.deleteEvent); // delete Event
