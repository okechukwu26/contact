import { Schema } from 'mongoose'
export interface IProperty {
  location: string
  status: string
  image: string
  updatedAt: Date
  createdAt: Date
  userId: string
  email: string
}
export interface IReadProperty {
  id?: string
}
