import { ResponseHandler, validator } from '../../lib/helper'
import { IRequest } from '../../interface'
import { Response } from 'express'
import { CommentService } from './Service'

const { success } = ResponseHandler

export class CommentController {
  static async create(req: IRequest, res: Response) {
    validator(req)
    const data = await CommentService.create(req.body)
    return success(res, req, 200, data)
  }
  static async read(req: IRequest, res: Response) {
    validator(req)
    const data = await CommentService.read(req.query)
    return success(res, req, 200, data)
  }
  static async delete(req: IRequest, res: Response) {
    const data = await CommentService.delete(req.params.id)
    return success(res, req, 200, data)
  }
}
