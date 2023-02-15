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
exports.deleteTransaction = exports.updateTransaction = exports.createTransaction = exports.getAllTransactions = exports.getTransaction = void 0;
const services_1 = require("../../services");
const responses_1 = require("../../utils/responses");
const getTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield services_1.transactionService.getTransactionById();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.getTransaction = getTransaction;
const getAllTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield services_1.transactionService.getAllTransactions();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.getAllTransactions = getAllTransactions;
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield services_1.transactionService.createTransaction();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.createTransaction = createTransaction;
const updateTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield services_1.transactionService.updateTransaction();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.updateTransaction = updateTransaction;
const deleteTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield services_1.transactionService.deleteTransaction();
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.deleteTransaction = deleteTransaction;
