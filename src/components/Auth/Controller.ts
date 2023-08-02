import { AuthService } from './Service'
import { Response } from 'express'
import { IRequest } from '../../interface'
import { validator, ResponseHandler } from '../../lib/helper'

const { success } = ResponseHandler

export class AuthController {
  static async landlordSignUp(req: IRequest, res: Response) {
    validator(req)
    const data = await AuthService.signUp({ ...req.body, role: 'LANDLORD' })
    return success(res, req, 201, data, 'signup successful')
  }

  static async signin(req: IRequest, res: Response) {
    validator(req)
    const data = await AuthService.signin(req.body)
    return success(res, req, 200, data, 'signin successful')
  }
  static async sendVerificationCode(req: IRequest, res: Response) {
    validator(req)
    const data = await AuthService.sendEmailVerificationCode(req.body)
    return success(res, req, 200, data, 'verification code sent')
  }
  static async verifyCode(req: IRequest, res: Response) {
    validator(req)
    const data = await AuthService.verifyCode(req.body)
    return success(res, req, 200, data)
  }
  static async tenantSignUp(req: IRequest, res: Response) {
    validator(req)
    const data = await AuthService.tenantSignUp({ ...req.body, role: 'TENANT' })
    return success(res, req, 201, data)
  }
}
