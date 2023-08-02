import { Router } from 'express'
import { ResponseHandler } from '../../lib/helper'
import { Controller } from './Controller'
import { contactSchema } from './schema'
import { ContactAuthMiddleware } from '../../lib/middleware/contactAuthorization'

const { ErrorHandler } = ResponseHandler

const router = Router()

router.post(
  '/create',
  ContactAuthMiddleware.Authenticate(),
  contactSchema(),
  ErrorHandler(Controller.create),
)
router.get(
  '/',
  ContactAuthMiddleware.Authenticate(),
  ErrorHandler(Controller.read),
)
router.put(
  '/:id',
  ContactAuthMiddleware.Authenticate(),

  ErrorHandler(Controller.update),
)
router.delete(
  '/:id',
  ContactAuthMiddleware.Authenticate(),
  ErrorHandler(Controller.delete),
)

export default router
