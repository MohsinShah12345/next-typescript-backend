"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const mongoose = require("mongoose");
try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process_1.default.env.MONGO_DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDb Connected", process_1.default.env.MONGO_DB_CONNECTION_STRING);
}
catch (error) {
    console.log("Cannot connect to mongodb", error);
}
