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
exports.signUp = exports.forgotPassword = exports.login = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
const responses_1 = require("../../utils/responses");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body; // data destructure
    try {
        const user = yield services_1.authService.findUserByEmail(email); // find user  by email if exist
        if (user && (yield utils_1.common.verifyPassword(password, user === null || user === void 0 ? void 0 : user.password))) {
            const token = yield utils_1.common.createToken(user === null || user === void 0 ? void 0 : user._id, email); // cretaing token for user
            res.json({ message: "User LoggedIn Successfully", data: user, token });
        }
        else {
            res.json({ message: "Wrong Email Or Password" });
        }
    }
    catch (error) {
        return (0, responses_1.throwError)(res, error);
    }
});
exports.login = login;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Password Successfully" });
});
exports.forgotPassword = forgotPassword;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email: userEmail } = req.body;
    try {
        const userExist = yield services_1.authService.findUserByEmail(userEmail); // checking if user exist with same email
        if (!userExist &&
            req.body // verfying if data is of valid type
        ) {
            const encryptedPassword = yield utils_1.common.encryptPassword(req.body.password); // converting password in encrypted Form and getting respone in string type
            const userCreated = yield services_1.authService.createUser(Object.assign(Object.assign({}, req.body), { password: encryptedPassword }));
            const token = yield utils_1.common.createToken(userCreated._id, userEmail); // creating token for user
            if (userCreated && token) {
                res.json({
                    data: userCreated,
                    token,
                });
            }
        }
        else {
            res.json({
                message: "User Exist with same email",
            });
        }
    }
    catch (error) {
        (0, responses_1.throwError)(res, error);
    }
});
exports.signUp = signUp;
