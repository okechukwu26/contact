import { Router } from 'express'
import { ResponseHandler } from '../../lib/helper'
import { PropertyController } from './Controller'
import { propertySchema } from './schema'
import { Middleware } from '../../lib/middleware'

const { ErrorHandler } = ResponseHandler

const router = Router()

router.post(
  '/create',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  propertySchema(),
  ErrorHandler(PropertyController.create),
)
router.get('/myProperty', ErrorHandler(PropertyController.read))

export default router
