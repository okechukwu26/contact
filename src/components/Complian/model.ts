import { Schema, model } from 'mongoose'
import { IComplain } from './interface'

const complianSchema = new Schema(
  {
    flatId: {
      type: String,
    },
    tenantId: {
      type: String,
    },
    complian: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
)

export const Complian = model<IComplain>('complian', complianSchema)
