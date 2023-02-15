import { Model, Document, Schema } from "mongoose";
import { number } from "zod";
export interface Event {
  name: string;
  duration: Date;
  location: string;
  description: string;
  socialMedia: { platform: string; link: string };
  questions: Array<string>;
  tickets: Array<{
    type: string;
    title: string;
    number: number;
    valid: Date;
    price: string;
  }>;
  perDayRate: string;
  hourlyRate: number | string;
  images: Array<string>;
  bookedSlots: Array<{ startTime: Date; endTime: Date }>;
  bookingRef: Array<Schema.Types.ObjectId>;
}
export interface EventDocument extends Event, Document {}
