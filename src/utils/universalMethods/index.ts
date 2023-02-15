
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import { Types } from "mongoose";
// use Promise return type for async functions
exports.createToken = async (user_id:Types.ObjectId, email:string):Promise<any> => {
  const token = jwt.sign(
    { user_id: user_id, email: email },
    process.env.PUBLIC_KEY,
    {
      expiresIn: "24h",
    }
  );
  return token;
};
exports.encryptPassword = async (password:any):Promise<any> => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
};
exports.verifyToken = async (bodyPassword:any, savedPassword:any):Promise<boolean> => {
  const verify = await bcrypt.compare(bodyPassword, savedPassword);
  return verify;
};