import { ComplianService } from './Service'
import { IRequest } from '../../interface'
import { Response } from 'express'
import { ResponseHandler, validator } from '../../lib/helper'

const { success } = ResponseHandler

export class ComplianController {
  static async create(req: IRequest, res: Response) {
    validator(req)
    const data = await ComplianService.create(req.body)
    return success(res, req, 200, data)
  }
  static async read(req: IRequest, res: Response) {
    validator(req)
    const data = await ComplianService.read(req.query)
    return success(res, req, 200, data)
  }
  static async delete(req: IRequest, res: Response) {
    validator(req)
    const id = req.params.id
    const data = await ComplianService.delete(id)
    return success(res, req, 200, data)
  }
}
