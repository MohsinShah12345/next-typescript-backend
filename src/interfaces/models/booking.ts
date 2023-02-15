import { Model , Document, Schema} from 'mongoose';
export interface Booking{
bookedBy:Array<Schema.Types.ObjectId>,
paidAmount:number,
bookedDate:Date,
slot:{
    startTime:'',
    endTime:"",
}
}
export interface BookingDocument extends Booking, Document{}