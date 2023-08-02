import { ResponseHandler, logger } from '../../lib/helper'
import { User } from '../User/model'
import { IProperty, IReadProperty } from './interface'
import { Property } from './model'
// import { Flat } from '../Flat/model'
// import { IUser } from '../User/interface'

const { throwError } = ResponseHandler

export class PropertyService {
  static async create(input: IProperty) {
    const owner = await User.findOne({ email: input.email })
    if (!owner) {
      logger.error('No user found')
      throwError('No user found', 400)
    }
    input.userId = owner._id.toString()
    const property = new Property(input)

    const name = owner.companyName.substring(0, 2)

    property.userId = owner._id.toString()
    await property.save()
    return 'property created'
  }

  static async read(query: IReadProperty) {
    return await Property.find(query)
  }
}
