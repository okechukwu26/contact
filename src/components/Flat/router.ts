import { ResponseHandler, imageHelper } from '../../lib/helper'
import { FlatController } from './Controller'
import { Router } from 'express'
import { flatSchema } from './schema'
import { Middleware } from '../../lib/middleware'

const router = Router()
const { ErrorHandler } = ResponseHandler

router.put(
  '/update',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  ErrorHandler(FlatController.update),
)
router.put(
  '/remove_tenant/:id',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  ErrorHandler(FlatController.removeTenant),
)

router.get(
  '/myFlat',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  ErrorHandler(FlatController.read),
)
router.post(
  '/',

  flatSchema(),
  ErrorHandler(FlatController.create),
)
router.post(
  '/assign_service',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  ErrorHandler(FlatController.AssignService),
)
export default router
