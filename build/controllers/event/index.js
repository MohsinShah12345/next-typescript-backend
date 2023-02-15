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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvents = exports.addEvent = exports.getAllEvents = exports.getEvent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const services_1 = require("../../services");
const index_1 = require("../../utils/responses/index");
const getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield services_1.eventService.getEventByID(req.params.id);
        res.status(200).json(event);
    }
    catch (error) {
        return (0, index_1.throwError)(res, error);
    }
});
exports.getEvent = getEvent;
const getAllEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield services_1.eventService.getAllEvents();
        res.json(200).json(events);
    }
    catch (error) {
        return (0, index_1.throwError)(res, error);
    }
});
exports.getAllEvents = getAllEvents;
const addEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const images = (_a = req.files) !== null && _a !== void 0 ? _a : [];
        const eventData = Object.assign(Object.assign({}, req.body), { images: (_b = [...images === null || images === void 0 ? void 0 : images.map((_) => _.location)]) !== null && _b !== void 0 ? _b : [] });
        const event = yield services_1.eventService.createEvent(eventData);
        res.status(200).json(event);
    }
    catch (error) {
        return (0, index_1.throwError)(res, error);
    }
});
exports.addEvent = addEvent;
const updateEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const images = (_c = req.files) !== null && _c !== void 0 ? _c : [];
        const data = {
            id: new mongoose_1.default.Types.ObjectId(req.params.id),
            body: Object.assign({}, req.body),
            images: ["New Image"],
        };
        const event = yield services_1.eventService.updateEvent(data);
        return (0, index_1.successResponse)(res, event, 200, "Event has been updated Successfully");
    }
    catch (error) {
        return (0, index_1.throwError)(res, error);
    }
});
exports.updateEvents = updateEvents;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = services_1.eventService.deleteEvent();
        res.status(200).json({ message: "event has been deleted" });
    }
    catch (error) {
        return (0, index_1.throwError)(res, error);
    }
});
exports.deleteEvent = deleteEvent;
