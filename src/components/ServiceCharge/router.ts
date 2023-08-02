import { ServiceChargeController } from './Controller'
import { ResponseHandler } from '../../lib/helper'
import { serviceChargeSchema } from './schema'
import { Router } from 'express'

const router = Router()
const { ErrorHandler } = ResponseHandler

router.post(
  '/',
  serviceChargeSchema(),
  ErrorHandler(ServiceChargeController.create),
)
router.get('/', ErrorHandler(ServiceChargeController.read))
router.delete('/:id', ErrorHandler(ServiceChargeController.delete))
export default router
