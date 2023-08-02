import { Schema, model } from 'mongoose'

import { IContactAuth } from './interface'
import Util from '../../util'

const contactAuth = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },

    // role: {
    //   type: String,
    //   enum: ['LANDLORD', 'TENANT', 'REALESTATE', 'ADMIN'],
    // },
    // isEmailVerified: {
    //   type: Boolean,
    //   default: false,
    // },
    // emailVerificationCode: {
    //   type: Number,
    // },
    // emailVerificationExpiration: {
    //   type: Number,
    // },
    // emailVerificationStatus: {
    //   type: Boolean,
    // },
    // passwordResetCode: {
    //   type: Number,
    // },
    expires: { type: Number },
    active: {
      type: Boolean,
      default: true,
    },
    // passwordResetExpiration: {
    //   type: Number,
    // },
    // passwordResetStatus: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true },
)

contactAuth.pre('save', async function (next) {
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

export const ContactAuth = model<IContactAuth>('contactAuth', contactAuth)
