import { IRequest } from '../../interface'
import { Response } from 'express'
import { ResponseHandler, logger } from '../../lib/helper'

const { success, throwError } = ResponseHandler

export class MediaController {
  static async upload(req: IRequest, res: Response) {
    return success(res, req, 200, req.file.path)
  }
}
