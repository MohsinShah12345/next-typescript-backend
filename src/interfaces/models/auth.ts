import { Model, Document } from "mongoose";
export interface Auth {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNo: number;
}
export interface AuthDocument extends Auth, Document {}
export interface AuthModel extends Model<AuthDocument> {}
