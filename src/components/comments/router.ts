import { Router } from 'express'
import { ResponseHandler } from '../../lib/helper'
import { CommentController } from './Controller'
import { CommentSchema } from './schema'
import { Middleware } from '../../lib/middleware'

const { ErrorHandler } = ResponseHandler

const router = Router()

router.post(
  '/',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  CommentSchema(),
  ErrorHandler(CommentController.create),
)
router.get(
  '/',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  ErrorHandler(CommentController.read),
)
router.delete(
  '/:id',
  Middleware.Authenticate(['LANDLORD', 'REALESTATE']),
  ErrorHandler(CommentController.delete),
)
export default router
