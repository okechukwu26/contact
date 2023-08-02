import { Schema, model } from 'mongoose'
import { ICreateContact } from './interface'

const contactsSchema = new Schema(
  {
    phone: {
      type: String,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    lastName: {
      type: String,
    },
    firstName: {
      type: String,
    },

    active: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'contactAuth',
    },
  },
  { timestamps: true },
)

export const Contacts = model<ICreateContact>('contact', contactsSchema)
