import { Schema, model } from 'mongoose'
import { IUser } from './interface'

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    companyName: {
      type: String,
    },
    role: {
      type: String,
    },
    image: {
      type: String,
    },

    phone: {
      type: String,
    },
  },
  { timestamps: true },
)

export const User = model<IUser>('user', UserSchema)
