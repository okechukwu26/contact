import { Router } from 'express'
import { AuthController } from './Controller'
import { signinSchema, signupSchema, tenantSchema } from './schema'
import { ResponseHandler } from '../../lib/helper'

const { ErrorHandler } = ResponseHandler

const router = Router()

router.post(
  '/landlord',
  signupSchema(),
  ErrorHandler(AuthController.landlordSignUp),
)
router.post(
  '/tenant',
  tenantSchema(),
  ErrorHandler(AuthController.tenantSignUp),
)
router.post('/signin', signinSchema(), ErrorHandler(AuthController.signin))

router.post(
  '/send_verification_code',
  ErrorHandler(AuthController.sendVerificationCode),
)
router.post('/verify_code', ErrorHandler(AuthController.verifyCode))

export default router
