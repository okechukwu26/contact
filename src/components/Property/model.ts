import { Schema, model } from 'mongoose'
import { IProperty } from './interface'

const PropertySchema = new Schema(
  {
    userId: {
      type: String,
    },

    active: {
      type: Boolean,
      default: true,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ['occupied', 'available'],
    },

    image: {
      type: String,
    },
  },
  { timestamps: true },
)

export const Property = model<IProperty>('property', PropertySchema)
