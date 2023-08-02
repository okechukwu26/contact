import { FlatService } from './Service'
import { ResponseHandler, validator } from '../../lib/helper'
import { IRequest } from '../../interface'
import { Response } from 'express'
import { IFlat } from './interface'

const { success } = ResponseHandler

export class FlatController {
  static async create(req: IRequest, res: Response) {
    validator(req)
    const data = await FlatService.create(req.body)
    return success(res, req, 201, data)
  }
  static async update(req: IRequest, res: Response) {
    validator(req)
    const query = req.query
    const data = await FlatService.update(query, req.body)
    return success(res, req, 200, data)
  }
  static async removeTenant(req: IRequest, res: Response) {
    validator(req)
    const id = req.params.id
    const data = await FlatService.removeTenant(id)

    return success(res, req, 200, data)
  }

  static async read(req: IRequest, res: Response) {
    validator(req)
    const data = await FlatService.read(req.query)
    return success(res, req, 200, data)
  }
  static async AssignService(req: IRequest, res: Response) {
    validator(req)
    const data = await FlatService.AssignServiceCharges(req.body)
    return success(res, req, 200, data)
  }
}
