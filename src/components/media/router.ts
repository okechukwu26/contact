import { Router } from 'express'
import { ResponseHandler } from '../../lib/helper'
import router from '../Auth/router'
import { imageHelper } from '../../lib/helper'
import { MediaController } from './controller'

const { ErrorHandler } = ResponseHandler

router.post('/upload', imageHelper(), ErrorHandler(MediaController.upload))

export default router
