import { ValidationChain } from 'express-validator'
import { email, firstName, lastName, phone } from '../../lib/middleware'

export const userSchema = (): ValidationChain[] => [
  email,
  firstName,
  lastName,
  phone,
]
