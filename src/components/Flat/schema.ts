import { ValidationChain } from 'express-validator'
import {
  propertyId,
  image,
  userId,
  description,
  price,
  flatNumber,
} from '../../lib/middleware'
export const flatSchema = (): ValidationChain[] => [
  propertyId,
  image,
  userId,
  description,
  price,
  flatNumber,
]
