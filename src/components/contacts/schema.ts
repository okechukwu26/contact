import { ValidationChain } from 'express-validator'
import { firstName, image, lastName, phone } from '../../lib/middleware'

export const contactSchema = (): ValidationChain[] => [
  phone,
  image,
  firstName,
  lastName,
]
