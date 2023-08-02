import { Router } from 'express'
import { ResponseHandler } from '../../lib/helper'
import { PaymentController } from './Controller'

const { ErrorHandler } = ResponseHandler
const router = Router()

router.post('/', ErrorHandler(PaymentController.create))

export default router
