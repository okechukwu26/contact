import { ServiceCharge } from './model'
import { ResponseHandler, logger } from '../../lib/helper'
import { ICreateService } from './interface'
const { throwError } = ResponseHandler

export class ServiceChargeService {
  static async create(input: ICreateService) {
    const service = await ServiceCharge.findOne({
      service: input.service,
      active: true,
    })
    if (service) {
      logger.error('service charge already exist')
      throwError('service charge already exists', 400)
    }

    return await ServiceCharge.create(input)
  }
  static async read() {
    return await ServiceCharge.find()
  }
  static async delete(_id: string) {
    await this._editAccount({ _id }, { active: false })
    return 'deleted'
  }
  static async _editAccount(filter: Record<string, unknown>, update: any) {
    const edit = await ServiceCharge.findOneAndUpdate(filter, update, {
      new: true,
    })
    if (!edit) {
      logger.error('not found')
      throwError('not found', 400)
    }
    return edit
  }
}
