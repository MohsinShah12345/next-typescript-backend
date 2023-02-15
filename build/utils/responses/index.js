"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = exports.throwError = exports.successResponse = void 0;
const successResponse = (res, data = {}, status = 200, message) => {
    return res.status(status).json({ data, message });
};
exports.successResponse = successResponse;
const throwError = (res, err = "Internal Server Error") => {
    return res.status(500).json({ message: err.message });
};
exports.throwError = throwError;
const sendResponse = (res) => { };
exports.sendResponse = sendResponse;
