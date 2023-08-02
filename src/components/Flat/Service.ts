import { Flat } from './model'
import { AssignService, FlatStatus, IFlat, IReadFlat } from './interface'
import { ResponseHandler, logger } from '../../lib/helper'
import dayjs from 'dayjs'
import { Property } from '../Property/model'
import { User } from '../User/model'
import Util from '../../util'

const { throwError } = ResponseHandler

export class FlatService {
  static async create(input: IFlat) {
    const owner = await Property.findOne({
      userId: input.userId,
      _id: input.propertyId,
    })
    if (!owner) {
      logger.error('invalid property or user Id')
      throwError('invalid property or user Id', 400)
    }
    const user = await User.findOne({ _id: owner.userId })
    if (!user) {
      logger.error('invalid  user Id')
      throwError('invalid  user Id', 400)
    }
    const number = Util.generateCode()
    const name = user.companyName.substring(0, 2)
    input.flatId = `${name}${number}-${input.flatNumber}`
    const flatNumber = await Flat.findOne({
      active: true,
      flatNumber: input.flatNumber,
    })
    if (flatNumber) {
      logger.error('This flat number already exists for this property')
      throwError('This flat number already exists for this property', 400)
    }

    return await Flat.create(input)
  }
  static async update(query, input: IFlat) {
    const flat = await Flat.findOne({
      userId: query.userId,
      active: true,
      propertyId: query.propertyId,
      flatId: query.flatId,
    })
    if (!flat) {
      logger.error('invalid user')
      throwError('invalid user', 400)
    }
    if (input.tenure != undefined || input.rentStarted != undefined) {
      input.rentStarted = dayjs(input.rentStarted).toDate()
      const futureDate = this.rentDate(input.tenure, input.rentStarted)
      ;(input.nextRentDate = futureDate.futureDate),
        (input.rentStarted = futureDate.currentDate)
    }

    await Flat.findOneAndUpdate({ _id: flat._id }, input, { new: true })
    return 'update successful'
  }
  static async removeTenant(id: string) {
    const flat = await Flat.findOne({ flatId: id })
    flat.tenant = undefined
    flat.status = FlatStatus.AVAILABLE

    await flat.save()
    return 'tenant has been removed '
  }
  static rentDate(tenure: number, date: Date) {
    const currentDate = new Date(date)
    const futureDate = new Date(date)

    futureDate.setFullYear(currentDate.getFullYear() + tenure)

    return { futureDate, currentDate }
  }
  static async read(query: IReadFlat) {
    return await Flat.find(query)
  }
  static async AssignServiceCharges(input: AssignService) {
    const flat = await Flat.findOne({
      active: true,
      flatId: input.flatId,
      propertyId: input.propertyId,
      userId: input.userId,
    })
    if (!flat) {
      logger.error('not found')
      throwError('not found', 400)
    }
    let total = 0
    flat.serviceCharges = input.service
    for (const service of input.service) {
      total += service.price
    }
    flat.totalServiceCharge = total
    await flat.save()
    return 'hello'
  }
}
