import { User } from './model'
import { IUser } from './interface'
import { ResponseHandler, logger } from '../../lib/helper'
import { AUTH } from '../Auth'

const { throwError } = ResponseHandler

export class UserService {
  static async createProfile(input: IUser) {
    const email = await AUTH.findOne({ active: true, email: input.email })
    if (!email) {
      logger.error('user not found')
      throwError('user not found', 400)
    }
    if (!email.isEmailVerified) {
      logger.error(`${email.email} has not been verified`)
      throwError('verify email to proceed', 400)
    }
    const exist = await User.findOne({ email: input.email })
    if (exist) {
      logger.error('this user already exists')
      throwError('this user already exist', 400)
    }
    const user = await User.create(input)
    user.role = email.role
    await this._editAcount({ email: input.email }, { role: email.role })
    return 'profile created'
  }

  static async _editAcount(filter: Record<string, unknown>, update: any) {
    const user = await User.findOneAndUpdate(filter, update, { new: true })
    if (!user) {
      logger.error('user not found')
      throwError('User not found', 400)
    }
    return user
  }
}
