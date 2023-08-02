import { Schema, model } from 'mongoose'
import { ICreatePayment } from './interface'

const PaymentSchema = new Schema(
  {
    flatId: {
      type: String,
    },
    paymentType: {
      type: String,
      enum: ['RENEWAL', 'SERVICECHARGE', 'SUBSCRIPTION'],
    },
    amount: {
      type: Number,
    },
    propertyId: { type: String },
    method: {
      type: String,
    },
    userId: {
      type: String,
    },
    referenceId: {
      type: String,
    },
  },
  { timestamps: true },
)

export const Payment = model<ICreatePayment>('payment', PaymentSchema)
