"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    var _a, _b;
    console.log("Verifying token");
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const myArray = (_b = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")) !== null && _b !== void 0 ? _b : [];
    if (!myArray[1]) {
        return res.status(403).send("A token is required for authentication");
    }
    const newToken = myArray[1];
    try {
        const decoded = jwt.verify(newToken, process.env.PUBLIC_KEY); // here we are verifying the token that is this created by our public key or not
        req.user = decoded; // this would be available inside our controllers
    }
    catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
module.exports = verifyToken;
