import { Schema, model } from 'mongoose'
import Util from '../../util'
import { IAuth } from './interface'

const authSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    userName: {
      type: String,
    },
    lastName: {
      type: String,
    },

    role: {
      type: String,
      enum: ['LANDLORD', 'TENANT', 'REALESTATE', 'ADMIN'],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationCode: {
      type: Number,
    },
    emailVerificationExpiration: {
      type: Number,
    },
    emailVerificationStatus: {
      type: Boolean,
    },
    passwordResetCode: {
      type: Number,
    },
    expires: { type: Number },
    active: {
      type: Boolean,
      default: true,
    },
    passwordResetExpiration: {
      type: Number,
    },
    passwordResetStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

authSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next()
    }
    const hash = await Util.bcryptEncoded({ value: this.password })
    this.password = hash
    return next()
  } catch (error) {
    return next(error)
  }
})

export const AUTH = model<IAuth>('auth', authSchema)
