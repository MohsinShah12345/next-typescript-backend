"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.encryptPassword = exports.createToken = void 0;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createToken = (user_id, email) => __awaiter(void 0, void 0, void 0, function* () {
    const token = jwt.sign({ user_id: user_id, email: email }, process.env.PUBLIC_KEY, {
        expiresIn: "24h",
    });
    return token;
});
exports.createToken = createToken;
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptedPassword = "";
    yield bcrypt.hash(password, 10);
    return encryptedPassword;
});
exports.encryptPassword = encryptPassword;
const verifyPassword = (bodyPassword, savedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const verify = true;
    yield bcrypt.compare(bodyPassword, savedPassword);
    return verify;
});
exports.verifyPassword = verifyPassword;
