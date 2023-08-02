import Express, { Response, Request, NextFunction } from 'express'
import { logger } from './logger'

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response<unknown, Record<string, unknown>>>

export class ResponseHandler {
  static success(
    res: Response,
    req?: Request,
    code?: number,
    data: object | number | string = {},
    message?: string,
  ) {
    return res.status(code).send({ status: true, code, message, data })
  }
  static badRequest(
    res: Response,
    code: number,
    message: string,
    next: NextFunction,
  ) {
    return res.status(code).send({ status: false, code, message, data: null })
  }
  static throwError(message: string, code: number) {
    logger.error(`Error status ${code}`)
    throw new Error(message)
  }
  static ErrorHandler = (fn: AsyncFunction) => (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}
