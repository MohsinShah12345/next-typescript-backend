"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../controllers");
const validators_1 = require("../../validators");
const awsMethods_1 = require("../../utils/awsMethods");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter
    .post("/signUp", (0, validators_1.validate)(validators_1.userSchema), awsMethods_1.upload.single("image"), controllers_1.auth.signUp)
    .post("/signIn", controllers_1.auth.login)
    .patch("/forgotPassword", controllers_1.auth.forgotPassword);
