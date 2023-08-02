import { ContactAuth } from './model'
import { ResponseHandler, logger, Jwt } from '../../lib/helper'
import { IContactAuth, ISignUpContact } from './interface'
import Util from '../../util'

const { throwError } = ResponseHandler

export class Service {
  static async create(input: IContactAuth) {
    const userName = await ContactAuth.findOne({
      active: true,
      userName: input.userName,
    })
    if (userName) {
      logger.error('user name already exist')
      throwError('user name already exist', 400)
    }
    const email = await ContactAuth.findOne({
      active: true,
      email: input.email,
    })
    if (email) {
      logger.error('email already exist')
      throwError('email already exist', 400)
    }
    const user = await ContactAuth.create(input)
    user.password = undefined
    return user
  }
  static async login(input: ISignUpContact) {
    const email = await ContactAuth.findOne({
      active: true,
      email: input.email,
    })
    if (!email) {
      logger.error('invalid credential')
      throwError('invalid credential', 400)
    }
    const isMatch = await Util.bcryptDecoded({
      value: input.password,
      comparedValue: email.password,
    })

    if (!isMatch) {
      logger.error(`invalid credentials`, 400)
      throwError('invalid credentials', 400)
    }
    const token = await Jwt.encoded({ _id: email._id })
    email.password = undefined

    return { email, token }
  }
}
