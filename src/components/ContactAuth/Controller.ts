import { Service } from './Service'
import { ResponseHandler, validator } from '../../lib/helper'
import { Response } from 'express'
import { IRequest } from '../../interface'

const { success } = ResponseHandler

export class Controller {
  static async create(req: IRequest, res: Response) {
    validator(req)
    const data = await Service.create(req.body)
    return success(res, req, 201, data)
  }
  static async signIn(req: IRequest, res: Response) {
    validator(req)
    const data = await Service.login(req.body)
    return success(res, req, 200, data)
  }
}
