import { Router, Request, Response } from 'express'
import { ResponseHandler } from '../lib/helper'
import components from '../components'

const router = Router()
const { success } = ResponseHandler

router.get('/', (req: Request, res: Response) => success(res, req, 200))
router.use('/api/auth', components.auth.routes)
router.use('/api/user', components.user.routes)
router.use('/api/property', components.property.routes)
router.use('/api/property', components.property.routes)
router.use('/api/flat', components.flat.routes)
router.use('/api/media', components.media.routes)
router.use('/api/complian', components.complian.routes)
router.use('/api/comment', components.comment.routes)
router.use('/api/service_charge', components.serviceCharge.routes)
router.use('/api/payment', components.payment.routes)
router.use('/api/contactAuth', components.contactAuth.routes)
router.use('/api/contact', components.contact.routes)

export default router
