import { Contacts } from './model'
import { ResponseHandler, logger } from '../../lib/helper'
import { ICreateContact, IReadContact } from './interface'

const { throwError } = ResponseHandler

export class Service {
  static async createService(input: ICreateContact, user) {
    const contact = new Contacts({
      isFavorite: input.isFavorite,
      phone: input.phone,
      user,
      firstName:input.firstName,
      lastName:input.lastName,
      image:input.image
    })
   return await contact.save()

    
  }

  static async read(query: IReadContact, user) {
    return await Contacts.find({ ...query, active: true, user })
  }
  static async update(input: ICreateContact, _id, user) {
    const contact = await Contacts.findOne({
      _id,
      active: true,
      user,
    })
    if (!contact) {
      logger.error('contact does not exists')
      throwError('contact does not exist', 400)
    }

    await Contacts.findOneAndUpdate({ _id, user }, input, { new: true })
    return 'contact updated'
  }

  static async delete(query: ICreateContact, _id, user) {
    const contact = await Contacts.findOne({ _id, user })
    if (!contact) {
      logger.error('contact does not exist')
      throwError('contact does not exist', 400)
    }
    query.active = false
    await Contacts.findOneAndUpdate({ _id, user }, query, {
      new: true,
    })
    return 'contact deleted'
  }
}
