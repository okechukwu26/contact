import { Request } from 'express'
import { validationResult } from 'express-validator'
import { ResponseHandler } from './Response'

const { throwError } = ResponseHandler

export const validator = (req: Request) => {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    const err = error.mapped()
    let errMsg
    for (const y in err) {
      errMsg = err[y].msg
    }
    throwError(errMsg, 400)
    return errMsg
  }
}
