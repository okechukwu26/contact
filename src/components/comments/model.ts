import { Schema, model } from 'mongoose'
import { ICreateComment } from './interface'

const commentSchema = new Schema(
  {
    comment: {
      type: String,
    },
    flatId: {
      type: String,
    },
    propertyId: {
      type: String,
    },
    active: { type: Boolean, default: true },
    userId: {
      type: String,
    },
    complianId: {
      type: String,
    },
  },
  { timestamps: true },
)

export const Comment = model<ICreateComment>('comment', commentSchema)
