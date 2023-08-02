import { AUTH } from './model'
import { ICreateAuth, IAuth, ITenant, IContactAuth } from './interface'
import { Jwt, ResponseHandler, logger, sendingMail } from '../../lib/helper'
import Util from '../../util'
import { User } from '../User/model'
import { Flat } from '../Flat/model'
import { FlatStatus } from '../Flat/interface'

const { throwError } = ResponseHandler

export class AuthService {
  static async signUp(input: ICreateAuth) {
    const emailExist = await AUTH.findOne({ email: input.email, active: true })

    if (emailExist) {
      logger.error(`The email ${input.email} already exist`)
      throwError('email already exist', 400)
    }

    const user = await AUTH.create(input)
    user.password = undefined
    return user
  }

  static async signin(input: IAuth) {
    const email = await this._findOne({ email: input.email, active: true })
    if (!email) {
      logger.error(`invalid credentials`, 400)
      throwError('invalid credentials', 400)
    }
    const user = await User.findOne({ role: email.role, email: email.email })
    if (!user) return 404

    const isMatch = await Util.bcryptDecoded({
      value: input.password,
      comparedValue: email.password,
    })

    if (!isMatch) {
      logger.error(`invalid credentials`, 400)
      throwError('invalid credentials', 400)
    }
    const expires = Util.changeHours(new Date(), 24)
    const token = await Jwt.encoded({ _id: email._id })

    if (!email.isEmailVerified) {
      logger.error(`${email.email} has not been verified`)
      throwError('verify email to proceed', 400)
    }
    await this._editAccount({ email: email.email }, { expires })
    email.password = undefined
    email.password = undefined

    return { email, token }
  }
  static async tenantSignUp(input: ITenant) {
    const flat = await Flat.findOne({ active: true, flatId: input.flatId })
    if (!flat) {
      logger.error('invalid flat Id')
      throwError('invalid flat Id', 400)
    }
    const email = await this._findOne({ email: input.email, active: true })
    if (email) {
      logger.error('this email is already taken')
      throwError('this email is already taken', 400)
    }

    const user = await AUTH.create(input)
    flat.tenant = user._id
    flat.status = FlatStatus.OCCUPIED
    await Flat.findOneAndUpdate(
      { flatId: input.flatId },
      { status: FlatStatus.OCCUPIED, tenant: user._id },
      { new: true },
    )

    user.password = undefined
    return user
  }
  static async sendEmailVerificationCode(input: {
    email: string
    id: string
  }): Promise<string> {
    const user = await this._findOne({ _id: input.id })
    if (!user) {
      logger.error('user not found')
      throwError('user not found', 400)
    }
    if (user.email !== input.email) {
      logger.error('invalid credential')
      throwError('invalid credential', 400)
    }
    const code = Util.generateCode()
    const expired = new Date().getTime() + 600000
    user.emailVerificationCode = code
    user.emailVerificationExpiration = expired
    user.emailVerificationStatus = true
    const data = {
      emailVerificationCode: user.emailVerificationCode,
      emailVerificationExpiration: user.emailVerificationExpiration,
      emailVerificationStatus: user.emailVerificationStatus,
    }

    sendingMail(user.email, 'Verification code', code)
    await this._editAccount({ _id: input.id }, data)

    return 'hello'
  }

  static async _findOne(query): Promise<IAuth> {
    const auth = await AUTH.findOne(query)
    return auth
  }
  static async verifyCode(input: { email: string; code: string }) {
    const user = await AUTH.findOne({ email: input.email, active: true })
    if (!user) {
      logger.error('user not found')
      throwError('user not found', 400)
    }
    if (user.emailVerificationCode !== Number(input.code)) {
      logger.error('invalid verification code')
      throwError('invalid verification code', 400)
    }
    const now = new Date().getTime()
    if (now > user.emailVerificationExpiration) {
      logger.error('OTP has expired')
      throwError('OTP has expired', 400)
    }
    if (user.emailVerificationStatus === false) {
      logger.error('verification code is not valid')
      throwError('Verification code is not valid', 400)
    }

    await this._editAccount({ email: input.email }, { isEmailVerified: true })
    return 'code verified'
  }
  private static async _editAccount(
    filter: Record<string, unknown>,
    update: any,
  ) {
    const user = await AUTH.findOneAndUpdate(filter, update, { new: true })
    if (!user) {
      logger.error('user not found')
      throwError('User not found', 400)
    }
    return user
  }
}
