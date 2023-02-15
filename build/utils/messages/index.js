"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
exports.messages = {
    // server side errors
    504: "Api Server Slow Response",
    503: "Service UnAvailable | Server can not handle To Many Request",
    502: "Server You Were Calling Was Not Actual Api Server",
    501: "Method Not Implemented Yet",
    500: "Internal Server Error | Server Crashed",
    // client side errors
    429: "So Many  Requests",
    404: "Url Does Not Exist",
    403: "No Permission To Access That Url",
    402: "",
    401: "User UnAuthorized",
    400: "Api Not Format Correctly | Use Missed Something ",
    // success messages
    202: "Request Has Been Accepted",
    201: "Created",
    200: "EveryThing Ok",
};
