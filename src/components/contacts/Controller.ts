import { Service } from './Service'
import { ResponseHandler, validator } from '../../lib/helper'
import { IRequest } from '../../interface'
import { Response } from 'express'

const { success } = ResponseHandler

export class Controller {
  static async create(req: IRequest, res: Response) {
    validator(req)
    const data = await Service.createService(req.body, req.user)
    return success(res, req, 201, data)
  }
  static async read(req: IRequest, res: Response) {
    validator(req)
    const data = await Service.read(req.query, req.user)
    return success(res, req, 200, data)
  }
  static async update(req: IRequest, res: Response) {
    validator(req)

    const data = await Service.update(req.body, req.params.id, req.user)
    return success(res, req, 200, data)
  }

  static async delete(req: IRequest, res: Response) {
    validator(req)
    const data = await Service.delete(req.body, req.params.id, req.user)
    return success(res, req, 200, data)
  }
}
