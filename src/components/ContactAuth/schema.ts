import { ValidationChain } from 'express-validator'
import {
  userName,
  password,
  firstName,
  lastName,
  email,
} from '../../lib/middleware'

export const contactAuthSchema = (): ValidationChain[] => {
  return [userName, password, firstName, lastName, password, email]
}
export const contactSignInSchema = (): ValidationChain[] => {
  return [email, password]
}
