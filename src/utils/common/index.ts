const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import { Schema } from "mongoose";
export const createToken = async (
  user_id: Schema.Types.ObjectId,
  email: string
): Promise<string> => {
  const token = jwt.sign(
    { user_id: user_id, email: email },
    process.env.PUBLIC_KEY,
    {
      expiresIn: "24h",
    }
  );
  return token;
};
export const encryptPassword = async (password: string): Promise<string> => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
};
export const verifyPassword = async (
  bodyPassword: string,
  savedPassword: string
): Promise<boolean> => {
  const verify = await bcrypt.compare(bodyPassword, savedPassword);
  return verify;
};
