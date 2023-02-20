import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { serviceRouter } from "../src/router";
// all available routes for server

const bodyParser = require("body-parser");
dotenv.config();
const app: Application = express();
// Instance of express app/application
app.use(bodyParser.json());
// use to read body from request e.g post/patch/delete
app.use(cors({ origin: ["http://localhost:3000/", "http://localhost:3001/"] }));
// origins allowed to server
app.get("/api/v1", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server Connected");
});
// default response of server
app.use("/api/v1", serviceRouter); // necessary for version controlling
// app.use("/v2", serviceRouter);
//available routes for
const port = process.env.PORT || 8000;
// port for server
require("../src/config/mongodb");
// connecting mongdb with server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// permission to use port for our node server
