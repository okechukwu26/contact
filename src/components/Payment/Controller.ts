import { ResponseHandler, validator } from '../../lib/helper'
import { IRequest } from '../../interface'
import { Response } from 'express'
import { PaymentService } from './Service'

const { success } = ResponseHandler

export class PaymentController {
  static async create(req: IRequest, res: Response) {
    validator(req)

    const data = await PaymentService.create(req.body)
    return success(res, req, 201, data)
  }
}
