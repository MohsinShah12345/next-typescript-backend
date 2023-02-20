import { z, AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
/*******************Auth******************** */
/*******************User******************** */

export const userSchema = z.object({
  // given below fields are for body / req.body(express)
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    contactNo: z.string(),
  }),
});
export const singleUser = z.object({
  params: z.object({
    id: z.string(),
  }),
});
export const updateUser = z.object({
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
  }),
});
export const updatePassword = z.object({
  body: z.object({
    oldPassword: z.string(),
    newPassword: z.string(),
    email: z.string(),
  }),
});
/********************Event***********************/
export const eventSchema = z.object({
  // given below fields are for body / req.body(express)
  body: z.object({
    type: z.string(),
    categories: z.string().array().nonempty(),
    hourlyRate: z.number().or(z.string()),
    images: z.array(z.object({})), // array of
    ticketsAvailable: z.number(),
  }),
});
/******************** Request**********************/
export const requestSchema = z.object({
  // given below fields are for body / req.body(express)
  body: z.object({
    user: z.string(),
    type: z.string(),
    slot: z.object({
      startTime: z.date(),
      endTime: z.date(),
    }),
  }),
});
/********************* Transaction*************************/
export const transactionSchema = z.object({
  // given below fields are for body / req.body(express)
  body: z.object({
    method: z.string(),
    amount: z.number().or(z.string()), // either entry might be number or string
    paymentDate: z.date(),
    paidBy: z.string(),
  }),
});
/************************Booking*************************/
export const bookingSchema = z.object({
  // given below fields are for body / req.body(express)
  body: z.object({
    paidAmount: z.number(),
    bookedDate: z.date(),
    slot: z.object({
      startTime: z.date(),
      endTime: z.date(),
    }),
  }),
});
/*************************Validator***********************/
export const validate =
  (Schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      await Schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };
