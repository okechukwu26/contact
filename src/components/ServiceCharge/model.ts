import { Schema, model } from 'mongoose'
import { ICreateService } from './interface'

const serviceChargeSchema = new Schema(
  {
    active: {
      type: Boolean,
    },
    service: {
      type: String,
    },
  },
  { timestamps: true },
)

export const ServiceCharge = model<ICreateService>(
  'serviceCharge',
  serviceChargeSchema,
)
