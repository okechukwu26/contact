import { ResponseHandler, validator } from '../../lib/helper'
import { IRequest } from '../../interface'
import { Response } from 'express'
import { ServiceChargeService } from './Service'

const { success } = ResponseHandler

export class ServiceChargeController {
  static async create(req: IRequest, res: Response) {
    validator(req)
    const data = await ServiceChargeService.create(req.body)
    return success(res, req, 200, data)
  }

  static async read(req: IRequest, res: Response) {
    validator(req)
    const data = await ServiceChargeService.read()
    return success(res, req, 200, data)
  }
  static async delete(req: IRequest, res: Response) {
    validator(req)
    const data = await ServiceChargeService.delete(req.params.id)
    return success(res, req, 200, data)
  }
}
