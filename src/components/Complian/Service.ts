import { IComplain, IReadComplian } from './interface'
import { Complian } from './model'
import { ResponseHandler, logger } from '../../lib/helper'
import { Flat } from '../Flat/model'
const { throwError } = ResponseHandler

export class ComplianService {
  static async create(input: IComplain) {
    console.log(input)
    const flat = await Flat.findOne({
      active: true,
      flatId: input.flatId,
      tenant: input.tenantId,
    })
    if (!flat) {
      logger.error('invalid flat')
      throwError('invalid flat', 400)
    }
    return await Complian.create(input)
  }
  static async read(query: IReadComplian) {
    return await Complian.find(query)
  }
  static async delete(_id: string) {
    const complian = await Complian.findOne({ active: true, _id })
    if (!complian) {
      logger.error('complian does not exists')
      throwError('complian does not exist', 400)
    }
    await this._editAccount({ _id }, { active: false })
    return 'complian deleted'
  }
  private static async _editAccount(
    filter: Record<string, unknown>,
    update: any,
  ) {
    const user = await Complian.findOneAndUpdate(filter, update, { new: true })
    if (!user) {
      logger.error('user not found')
      throwError('User not found', 400)
    }
    return user
  }
}
