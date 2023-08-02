import { UserService } from './Service'
import { ResponseHandler, validator } from '../../lib/helper'
import { IRequest } from '../../interface'
import { Response } from 'express'

const { success } = ResponseHandler

export class UserController {
  static async createUser(req: IRequest, res: Response) {
    validator(req)

    const data = await UserService.createProfile(req.body)
    return success(res, req, 200, data)
  }
  static async uploadImage(req: IRequest, res: Response) {
    validator(req)
    const image = req.file.path
    return success(res, req, 201, image)
  }
}
