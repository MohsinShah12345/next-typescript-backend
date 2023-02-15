import express, { Router } from "express";
import { request } from "../../controllers";
const requestRouter: Router = express.Router();
requestRouter
  .get("/:id", request.getRequest)
  .get("/requests", request.getAllRequets)
  .post("/", request.createRequest)
  .patch("/:id", request.updateRequest)
  .delete("/:id", request.deleteRequest);
export { requestRouter };
