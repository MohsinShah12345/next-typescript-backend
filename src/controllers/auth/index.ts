import { Request, Response } from "express";
import { returnAny } from "../../interfaces/common";
import { authService } from "../../services";
import { common } from "../../utils";
import { throwError } from "../../utils/responses";
export const login = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  const { email, password } = req.body; // data destructure
  try {
    const user = await authService.findUserByEmail(email); // find user  by email if exist
    if (user && (await common.verifyPassword(password, user?.password))) {
      const token: string = await common.createToken(user?._id, email); // cretaing token for user
      res.json({ message: "User LoggedIn Successfully", data: user, token });
    } else {
      res.json({ message: "Wrong Email Or Password || User Does Not Exist" });
    }
  } catch (error) {
    return throwError(res, error);
  }
};
export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  res.status(200).json({ message: "Password Successfully" });
};
export const signUp = async (
  req: Request,
  res: Response
): Promise<returnAny> => {
  const { email: userEmail } = req.body;
  try {
    const userExist: object = await authService.findUserByEmail(userEmail); // checking if user exist with same email
    if (
      !userExist // verfying if data is of valid type
    ) {
      const encryptedPassword: string = await common.encryptPassword(
        req.body.password
      ); // converting password in encrypted Form and getting respone in string type
      const userCreated: any = await authService.createUser({
        ...req.body,
        password: encryptedPassword,
      });
      // creating token for new user
      const token: string = await common.createToken(userCreated.id, userEmail); // creating token for user
      if (userCreated && token) {
        res.json({
          data: userCreated,
          token,
        });
      }
    } else {
      res.json({
        message: "User Exist with same email",
      });
    }
  } catch (error) {
    throwError(res, error);
  }
};
