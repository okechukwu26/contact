import { Response, NextFunction } from 'express'
import { ContactAuth } from '../../components/ContactAuth/model'
import { ResponseHandler, logger } from '../helper'
import { IRequest } from '../../interface'
import { Jwt } from '../helper'
import jwtToken from 'jsonwebtoken'
const { badRequest, throwError } = ResponseHandler

export class ContactAuthMiddleware {
  static Authenticate = () => async (
    req: IRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token = req.headers['authorization']
      if (!token) {
        logger.error('Authentication failed, no token was provided')
        throwError('Authentication failed, no token was provided', 403)
      }

      const result = await Jwt.verify(token as string)

      if (typeof result === 'string') {
        throwError('invalid typeof for token', 400)
      } else {
        const decode = await ContactAuth.findOne({
          active: true,
          _id: result._id,
        })
        // const currentDate = new Date().getTime()

        // if (currentDate < result.exp) {
        //   logger.error('Token expired')
        //   throwError('token expired', 400)
        // }

        req.user = decode._id
        next()
      }
    } catch ({ message, code }) {
      return badRequest(
        res,
        code || 402,
        message || 'authentication failed, invalid token',
        next,
      )
    }
  }
}
