import { Request, Response } from "express";
import { returnAny } from "../../interfaces/common";
import { userService } from "../../services";
import {
  throwError,
  successResponse,
  failureResponse,
} from "../../utils/responses";
import { common } from "../../utils";
export const singleUser = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
    const { id } = req.params;
    const user = await userService.singleUser(id);
    if (user) {
      return successResponse(res, user, 200, "User Data Fetched Successfully");
    } else return failureResponse(res, 400, "User Does not Exist ");
  } catch (error) {
    return throwError(res, error);
  }
};
export const allUsers = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
    const users = await userService.findAllUser();
    return successResponse(res, users, 200, "Users Fetched Successfuly");
  } catch (error) {
    return throwError(res, error);
  }
};
export const updateUser = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
    const { email, ...rest } = req.body;
    const user = await userService.findByEmail(email);
    if (user) {
      if (rest?.password) {
        const encryptedPassword: string = await common.encryptPassword(
          rest.password
        ); // converting password in encrypted Form and getting respone in string type
        const updatedUser: any = await userService.updateUser(email, {
          ...rest,
          password: encryptedPassword,
        });
        return successResponse(
          res,
          updatedUser,
          200,
          "User Data Has Been Updated"
        );
      } else {
        const updatedUser: any = await userService.updateUser(email, rest);
        return successResponse(
          res,
          updatedUser,
          200,
          "User Data Has Been Updated"
        );
      }
    } else {
      return failureResponse(res, 400, "User Does not exist will this email");
    }
  } catch (error) {
    return throwError(res, error);
  }
};
export const updatePassword = async (req: Request, res: Response) => {
  try {
    const { oldPassword = "", newPassword = "", email = "" } = req.body;
    // find user with email
    const user = await userService.findByEmail(email);
    // if user exist in database
    if (user) {
      const verifyPassword = await common.verifyPassword(
        oldPassword,
        user?.password
      );
      // if passwords verify
      if (verifyPassword) {
        const encryptedPassword: string = await common.encryptPassword(
          newPassword
        );
        const updatedUser = await userService.updateByObject(
          { email },
          { password: encryptedPassword }
        );

        // user Password Has been updated
        return successResponse(
          res,
          updatedUser,
          200,
          "Password Has Been Updated"
        );
        // passwprd has been updated
      } else {
        // password  did not Matched
        return failureResponse(
          res,
          400,
          "Old password Did Not Matched  with previous matched"
        );
      }
    } else {
      return failureResponse(res, 400, "User Does Not Exist");
      // user does not exist with email
    }
  } catch (error) {
    return throwError(res, error);
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  try {
    const { id } = req.params;
    const user = await userService.singleUser(id);
    if (user) {
      const deleteUser = await userService.deleteUser(id);
      return successResponse(res, {}, 200, "User Account hass been Deleted");
    } else {
      return failureResponse(res, 400, "User Does Not Exist");
    }
  } catch (error) {
    return throwError(res, error);
  }
};
