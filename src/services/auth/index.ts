import authModel from "../../models/auth";
import { common } from "../../utils";
export const findUserByEmail = async (email: string): Promise<any> => {
  try {
    const userExist = await authModel.findOne({ email: email });
    return userExist;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (data: any): Promise<any | void> => {
  // pending
};
export const createUser = async (data: any): Promise<any> => {
  try {
    const user = await authModel.create({ ...data });
    return user;
  } catch (error) {
    throw error;
  }
};
