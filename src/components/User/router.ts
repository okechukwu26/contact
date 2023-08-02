import { Router } from 'express'
import { UserController } from './Controller'
import { ResponseHandler } from '../../lib/helper'

const { ErrorHandler } = ResponseHandler
const router = Router()

router.post('/profile', ErrorHandler(UserController.createUser))

export default router
