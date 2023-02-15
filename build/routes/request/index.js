"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const requestRouter = express_1.default.Router();
exports.requestRouter = requestRouter;
requestRouter
    .get("/:id", controllers_1.request.getRequest)
    .get("/requests", controllers_1.request.getAllRequets)
    .post("/", controllers_1.request.createRequest)
    .patch("/:id", controllers_1.request.updateRequest)
    .delete("/:id", controllers_1.request.deleteRequest);
