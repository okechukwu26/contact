import { Router } from 'express'
import { Controller } from './Controller'
import { ResponseHandler } from '../../lib/helper'
import { contactAuthSchema, contactSignInSchema } from './schema'

const { ErrorHandler } = ResponseHandler

const router = Router()

router.post('/signup', contactAuthSchema(), ErrorHandler(Controller.create))
router.post('/signin', contactSignInSchema(), ErrorHandler(Controller.signIn))

export default router
