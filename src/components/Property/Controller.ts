import { ResponseHandler, validator } from '../../lib/helper'
import { IRequest } from '../../interface'
import { PropertyService } from './Service'
import { Response } from 'express'

const { success } = ResponseHandler

export class PropertyController {
  static async create(req: IRequest, res: Response) {
    validator(req)

    const data = await PropertyService.create(req.body)
    return success(res, req, 201, data)
  }
  static async read(req: IRequest, res: Response) {
    validator(req)

    const data = await PropertyService.read(req.query)
    return success(res, req, 200, data)
  }
}
