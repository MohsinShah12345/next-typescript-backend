import { Model, Document  } from 'mongoose';
export interface Transaction {
method:string,//e.g stripe
amount: number | string , // amount might be in numbers or string(50$),
paymentDate: Date,
paidBy:string, // e.g name, email
};
export interface TransactionDocument extends Transaction, Document { }