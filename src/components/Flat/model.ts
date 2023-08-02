import { Schema, model } from 'mongoose'
import { IFlat, FlatStatus } from './interface'

const flatSchema = new Schema(
  {
    propertyId: {
      type: String,
    },
    userId: {
      type: String,
    },
    price: {
      type: Number,
    },
    flatId: {
      type: String,
    },
    rentStarted: {
      type: Date,
    },
    nextRentDate: {
      type: Date,
    },
    image: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    flatNumber: { type: Number },
    tenure: {
      type: Number,
    },
    totalServiceCharge: {
      type: Number,
    },
    serviceCharges: [
      {
        name: String,
        price: Number,
      },
    ],

    status: {
      type: String,
      enum: FlatStatus,
      default: FlatStatus.AVAILABLE,
    },
    tenant: {
      type: Schema.Types.ObjectId,
      ref: 'tenant',
    },
    description: {
      type: String,
    },
    complains: {
      type: String,
    },
  },
  { timestamps: true },
)

export const Flat = model<IFlat>('flat', flatSchema)
