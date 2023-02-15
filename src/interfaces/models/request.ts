import { Document, Model } from "mongoose";
export interface Request {
  user: string;
  type: string;
  slot: { startTime: string; endTime: string };
}
export interface RequestDocument extends Request, Document {}
