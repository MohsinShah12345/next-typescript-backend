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
exports.deleteRequest = exports.updateRequest = exports.createRequest = exports.getAllRequets = exports.getRequest = void 0;
const services_1 = require("../../services");
const responses_1 = require("../../utils/responses");
const getRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield services_1.requestService.getRequestById();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.getRequest = getRequest;
const getAllRequets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield services_1.requestService.getAllRequests();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.getAllRequets = getAllRequets;
const createRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield services_1.requestService.createRequest();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.createRequest = createRequest;
const updateRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield services_1.requestService.updateRequest();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.updateRequest = updateRequest;
const deleteRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = yield services_1.requestService.deleteRequest();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.deleteRequest = deleteRequest;
