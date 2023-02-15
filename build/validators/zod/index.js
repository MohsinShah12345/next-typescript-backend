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
exports.validate = exports.bookingSchema = exports.transactionSchema = exports.requestSchema = exports.eventSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    // given below fields are for body / req.body(express)
    body: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
        contactNo: zod_1.z.string(),
    }),
});
exports.eventSchema = zod_1.z.object({
    // given below fields are for body / req.body(express)
    body: zod_1.z.object({
        type: zod_1.z.string(),
        categories: zod_1.z.string().array().nonempty(),
        hourlyRate: zod_1.z.number().or(zod_1.z.string()),
        images: zod_1.z.array(zod_1.z.object({})),
        ticketsAvailable: zod_1.z.number(),
    }),
});
exports.requestSchema = zod_1.z.object({
    // given below fields are for body / req.body(express)
    body: zod_1.z.object({
        user: zod_1.z.string(),
        type: zod_1.z.string(),
        slot: zod_1.z.object({
            startTime: zod_1.z.date(),
            endTime: zod_1.z.date(),
        }),
    }),
});
exports.transactionSchema = zod_1.z.object({
    // given below fields are for body / req.body(express)
    body: zod_1.z.object({
        method: zod_1.z.string(),
        amount: zod_1.z.number().or(zod_1.z.string()),
        paymentDate: zod_1.z.date(),
        paidBy: zod_1.z.string(),
    }),
});
exports.bookingSchema = zod_1.z.object({
    // given below fields are for body / req.body(express)
    body: zod_1.z.object({
        paidAmount: zod_1.z.number(),
        bookedDate: zod_1.z.date(),
        slot: zod_1.z.object({
            startTime: zod_1.z.date(),
            endTime: zod_1.z.date(),
        }),
    }),
});
const validate = (Schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Schema.parseAsync({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        next();
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.validate = validate;
