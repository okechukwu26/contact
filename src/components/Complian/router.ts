import { ResponseHandler } from '../../lib/helper'
import { ComplianController } from './Controller'
import { Router } from 'express'
import { complianSchema } from './schema'
import { Middleware } from '../../lib/middleware'

const { ErrorHandler } = ResponseHandler

const router = Router()

router.post(
  '/',
  Middleware.Authenticate(['TENANT']),
  complianSchema(),
  ErrorHandler(ComplianController.create),
)
router.get(
  '/',
  Middleware.Authenticate(['TENANT']),
  ErrorHandler(ComplianController.read),
)
router.delete(
  '/:id',
  Middleware.Authenticate(['TENANT']),
  ErrorHandler(ComplianController.delete),
)
export default router
