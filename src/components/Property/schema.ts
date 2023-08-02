import { ValidationChain } from 'express-validator'
import { email, location, image, userId } from '../../lib/middleware'
export const propertySchema = (): ValidationChain[] => [email, location, image]
