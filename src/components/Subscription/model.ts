import { Schema, model } from 'mongoose'
import { ICreateSubcription } from './interface'
const subscriptionSchema = new Schema(
  {
    userId: {
      type: String,
    },
    dateOfSubscription: {
      type: Date,
    },
    nextRenewalDate: {
      type: Date,
    },
  },
  { timestamps: true },
)
export const Subscription = model<ICreateSubcription>(
  'subscription',
  subscriptionSchema,
)
