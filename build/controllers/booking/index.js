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
exports.cancelBooking = exports.changeBooking = exports.createBooking = exports.getAllBooking = exports.getBooking = void 0;
const services_1 = require("../../services");
const responses_1 = require("../../utils/responses");
const getBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield services_1.bookingService.getBooking(req.params.id);
        console.log(event);
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.getBooking = getBooking;
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("controller");
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.getAllBooking = getAllBooking;
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("controller1");
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.createBooking = createBooking;
const changeBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("controller2");
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.changeBooking = changeBooking;
const cancelBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("controller");
        console.log("second function");
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.cancelBooking = cancelBooking;
