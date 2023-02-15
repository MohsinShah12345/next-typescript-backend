import { Request } from "express"
export interface IGetUserAuthInfoRequest extends Request {
  user: {} // or any other type
  // overriding our Request parameter
}
