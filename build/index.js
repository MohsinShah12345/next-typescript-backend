"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("../src/router");
// all available routes for server
const bodyParser = require("body-parser");
dotenv.config();
const app = (0, express_1.default)();
// Instance of express app/application
app.use(bodyParser.json());
// use to read body from request e.g post/patch/delete
app.use((0, cors_1.default)({ origin: ["http://localhost:3000/", "http://localhost:3001/"] }));
// origins allowed to server
app.get("/api/v1", (req, res) => {
    res.send("Express + TypeScript Server Connected");
});
// default response of server
app.use("/api/v1", router_1.serviceRouter); // necessary for version controlling
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
