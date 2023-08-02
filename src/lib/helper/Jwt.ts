import jwtToken from 'jsonwebtoken'
import { ResponseHandler } from './Response'
import { APP_NAME, APP_SECRET } from '../../config'

const { throwError } = ResponseHandler

export class Jwt {
  static async encoded(payload: Record<string, unknown> | string) {
    return jwtToken.sign(payload, APP_SECRET, { expiresIn: '48hrs' })
  }
  static async decoded(token: string) {
    return jwtToken.decode(token)
   
  }

  static async verify(token: string) {
    try {
      const result = jwtToken.verify(token, APP_SECRET)
      return result
    } catch (error) {
      throwError('Token expired', error.code || 400)
    }
  }
}
