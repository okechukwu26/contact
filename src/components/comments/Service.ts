import { Comment } from './model'
import { ResponseHandler, logger } from '../../lib/helper'
import { ICreateComment, IReadComment } from './interface'
import { Complian } from '../Complian/model'
import { Property } from '../Property/model'
import { Flat } from '../Flat/model'
const { throwError } = ResponseHandler

export class CommentService {
  static async create(input: ICreateComment) {
    const complian = await Complian.findOne({
      active: true,
      _id: input.complianId,
      flatId: input.flatId,
    })
    if (!complian) {
      logger.error('complian does not exists')
      throwError('complian does not exists', 400)
    }
    const prop = await Flat.findOne({
      active: true,
      userId: input.userId,
      flatId: input.flatId,
      propertyId: input.propertyId,
    })
    if (!prop) {
      logger.error('invalid property or user')
      throwError('invalid property or user', 400)
    }
    return await Comment.create(input)
  }
  static async read(input: IReadComment) {
    return await Comment.find(input)
  }
  static async delete(_id: string) {
    await this._editAcount({ active: true, _id }, { active: false })
    return 'comment deleted'
  }
  static async _editAcount(filter: Record<string, unknown>, update: any) {
    const edit = await Comment.findOneAndUpdate(filter, update, { new: true })
    if (!edit) {
      logger.error('not found')
      throwError('not found', 400)
    }
    return edit
  }
}
