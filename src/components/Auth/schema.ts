import { check, ValidationChain } from 'express-validator'
import { password, email } from '../../lib/middleware'

export const signupSchema = (): ValidationChain[] => [email, password]

export const signinSchema = (): ValidationChain[] => [email, password]

export const tenantSchema = (): ValidationChain[] => [
  check('flatId').not().isEmpty().withMessage('flatId is required'),
  email,
  password,
]
